import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../components/ButtonBasic';
import Text from '../../components/TextBasic';
import Input from '../../components/InputBasic';
import AlertMessage from '../../components/AlertMessage';
import Loading from '../../components/Loading';

import { showAlert, hideAlert } from '../../components/AlertMessage/actionCreators.js';
import { sendVerificationCode, clearPasswordRecovery } from './actionCreators.js';
import styles from './styles';

export default function PasswordRecovery(props) {
    const { navigation } = props;

    const [email, setEmail] = useState('');


    const dispatch = useDispatch();
    const passwordRecovery = useSelector((state) => state.passwordRecovery);
    const loading = useSelector((state) => state.loading);
    const alertMessage = useSelector((state) => state.alert);

    useEffect(() => {
        if (passwordRecovery.sendedCode) navigation.navigate('emailVerify',{email});
        return () => {
            dispatch(clearPasswordRecovery());
        };
    }, [passwordRecovery.sendedCode]);

    const sendCode = () => {
        if (email.trim().length < 6) {
            dispatch(showAlert('Debes llenar correctamente el correo electrónico'));
        } else {
            dispatch(hideAlert());
            dispatch(sendVerificationCode(email));
        }
    };
    return (
        <View style={styles.container}>
            <View style={{ marginBottom: 50 }}>
                <Text text="Password recovery" textStyle={{ fontWeight: 'bold' }} size={25} />
                <Text text="Enter your email to recover your password" type="SecondaryText" />
            </View>
             {alertMessage.showAlert || passwordRecovery.error ? <AlertMessage message={alertMessage.message || passwordRecovery.message} /> : null}
            <View
                style={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 5,
                }}
            >
                {loading.isLoading ? <Loading /> : null}
                <Input
                    type="Email"
                    value={email}
                    setValue={setEmail}
                    width="100%"
                    placeHolder="email@example.com"
                    leftIcon={{
                        type: 'material-community',
                        name: 'email-outline',
                        color: '#3E5481',
                    }}
                />
            </View>
            <View style={{ width: '100%', display: 'flex', alignItems: 'center', padding: 10 }}>
                <Button
                    text="Recover"
                    height={50}
                    containerStyle={{ width: '100%' }}
                    press={sendCode}
                />
            </View>
        </View>
    );
}

PasswordRecovery.propTypes = {};
PasswordRecovery.defaultProps = {};
