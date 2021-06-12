import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { View, TouchableOpacity, Text, Modal } from 'react-native';
import { SocialIcon, Overlay, Icon } from 'react-native-elements';

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import Button from '../ButtonBasic';
import TextBasic from '../TextBasic';
import Input from '../InputBasic';
import AlertMessage from '../AlertMessage';
import Loading from '../Loading';

import { showAlert, hideAlert } from '../AlertMessage/actionCreators.js';

import styles from './styles';

const CELL_COUNT = 4;

export default function EmailVerification({
    navigate,
    message,
    hide,
    clear,
    show,
    selector,
    email,
    press,
}) {
    const [value, setValue] = useState('');
    const [minutes, setMinutes] = useState(4);
    const [seconds, setSeconds] = useState(59);
    const intervalRef = useRef();

    const state = useSelector(selector);
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const alertMessage = useSelector((state) => state.alert);

    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue });

    const updateTimer = async () => {
        if (seconds === 59 && minutes === -1) {
            setSeconds(0);
            setMinutes(0);
        } else if (seconds === 0 && minutes > 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
        } else if (!(seconds === 0 && minutes === 0)) {
            setSeconds(seconds - 1);
        }
    };
    useEffect(() => {
        if (minutes >= 0 && minutes <= 4 && !(minutes === -1 && seconds === 59))
            intervalRef.current = setInterval(updateTimer, 1000);
        if (minutes === 0 && seconds === 0) dispatch(showAlert('El tiempo de espera fue agotado'));
        return () => {
            clearInterval(intervalRef.current);
        };
    }, [seconds]);

    useEffect(() => {
        if (state.verified) dispatch(show());
        return () => {
            dispatch(hideAlert());
            dispatch(hide());
            dispatch(clear());
        };
    }, [state.verified]);
    return (
        <View style={styles.container}>
            <View>
                <TextBasic text="Check your email" textStyle={{ fontWeight: 'bold' }} size={25} />
                <TextBasic
                    text="We have sent the code to your email"
                    size={16}
                    type="SecondaryText"
                />
            </View>
            <View style={{ display: 'flex', width: '90%', marginTop: 30, marginBottom: 30 }}>
                {loading.isLoading ? <Loading /> : null}
                <CodeField
                    ref={ref}
                    {...props}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFiledRoot}
                    keyboardType="phone-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <View
                            // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                            onLayout={getCellOnLayoutHandler(index)}
                            key={index}
                            style={[styles.cellRoot, isFocused && styles.focusCell]}
                        >
                            <Text style={styles.cellText}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        </View>
                    )}
                />
            </View>
            {alertMessage.showAlert || state.error ? (
                <AlertMessage message={alertMessage.message || state.message} />
            ) : null}
            <View style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
                    <TextBasic text="code expires in " />
                    <TextBasic text={`0${minutes}:${seconds}`} type="Secondary" />
                </View>
                <Button
                    text="Verify"
                    height={50}
                    containerStyle={{ width: '80%' }}
                    press={() => dispatch(press(email, value))}
                />
                <Button
                    text="Send again"
                    type="Light"
                    height={50}
                    containerStyle={{ width: '80%', marginTop: 20 }}
                />
            </View>
            <Overlay
                isVisible={state.showModal}
                overlayStyle={{ margin: 15 }}
                onRequestClose={async () => {
                    dispatch(hide());
                    navigate('login');
                }}
            >
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name="email" type="material-community" size={100} color="#1FCC79" />
                    <TextBasic text={message} type="MainText" />
                    <TextBasic text={email} type="Secondary" />
                </View>
            </Overlay>
        </View>
    );
}

EmailVerification.propTypes = {};
EmailVerification.defaultProps = {};
