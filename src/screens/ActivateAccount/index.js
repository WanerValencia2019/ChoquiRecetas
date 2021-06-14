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
import { sendVerificationCode, clearActivateAccount } from './actionCreators.js';
import styles from './styles';

export default function ActivateAccount(props) {
    const { navigation } = props;

    const [email, setEmail] = useState('');

    const dispatch = useDispatch();
    const activateAccount = useSelector((state) => state.activateAccount);
    const loading = useSelector((state) => state.loading);
    const alertMessage = useSelector((state) => state.alert);

    useEffect(() => {
        if (activateAccount.sendedCode) navigation.navigate('activateAccountVerify', { email });
        return () => {
            dispatch(clearActivateAccount());
            dispatch(hideAlert());
        };
    }, [activateAccount.sendedCode]);

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
                <Text text="Activar mi cuenta" textStyle={{ fontWeight: 'bold' }} size={25} />
                <Text
                    text="Digita el correo electrónico para activar tu cuenta"
                    type="SecondaryText"
                />
            </View>
            {alertMessage.showAlert ? <AlertMessage message={alertMessage.message} /> : null}
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
                    placeHolder="correo@mail.com"
                    leftIcon={{
                        type: 'material-community',
                        name: 'email-outline',
                        color: '#3E5481',
                    }}
                />
            </View>
            <View style={{ width: '100%', display: 'flex', alignItems: 'center', padding: 10 }}>
                <Button
                    text="Activar"
                    height={50}
                    containerStyle={{ width: '100%' }}
                    press={sendCode}
                />
            </View>
        </View>
    );
}

ActivateAccount.propTypes = {};
ActivateAccount.defaultProps = {};
