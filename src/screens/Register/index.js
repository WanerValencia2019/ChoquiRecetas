import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, ImageBackground } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../../components/ButtonBasic';
import Text from '../../components/TextBasic';
import Input from '../../components/InputBasic';

import AlertMessage from '../../components/AlertMessage';
import Loading from '../../components/Loading';

import { register, clearRegister } from './actionCreators.js';
import { showAlert, hideAlert } from '../../components/AlertMessage/actionCreators.js';

import styles from './styles';

export default function Register(props) {
    const { navigation } = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');

    const registerReducer = useSelector((state) => state.register);
    const loading = useSelector((state) => state.loading);
    const alertMessage = useSelector((state) => state.alert);
    const dispatch = useDispatch();


    useEffect(() => {
        if (registerReducer.sendedCode) navigation.navigate('accountActivate', { email });
        return () => {
            dispatch(clearRegister());
            dispatch(hideAlert())
        };
    }, [registerReducer.sendedCode]);

    const validatePasswords = (error, setError, confirm) => {
        if (password !== confirm) {
            setError(true);
            dispatch(showAlert('Las contraseñas no coinciden'));
        } else {
            setError(false);
            dispatch(hideAlert());
        }
    };

    const registerWithEmail = () => {

        if (
            (email.trim().length < 3) ||
            (password.trim().length < 4) ||
            (username.trim().length < 1) ||
            (confirmPassword.trim().length < 2) ||
            (first_name.trim().length < 1) ||
            (last_name.trim().length < 1)
        ) {
            dispatch(showAlert('Debes llenar correctamente todos los campos'));
        }
        else if ( confirmPassword !== password){
         dispatch(showAlert('Las contraseñas no coinciden'));    
        }
        else {
            dispatch(hideAlert());
            dispatch(
                register({
                    email,
                    password,
                    password_confirm: confirmPassword,
                    username,
                    last_name,
                    first_name,
                })
            );
        }
    };

    return (
        <KeyboardAwareScrollView style={styles.keyboardContainer}>
            <View style={styles.container}>
                <View style={{ marginBottom: 50 }}>
                    <Text text="Welcome" textStyle={{ fontWeight: 'bold' }} size={25} />
                    <Text text="Please enter your account here" type="SecondaryText" />
                </View>
                <View style={{ display: 'flex', width: '90%' }}>
                    <View style={{ marginBottom: 10 }}>
                        {alertMessage.showAlert || registerReducer.error ? (
                            <AlertMessage
                                message={alertMessage.message || registerReducer.message}
                            />
                        ) : null}
                    </View>
                    <Input
                        value={first_name}
                        setValue={setFirstName}
                        width="100%"
                        placeHolder="first name"
                        leftIcon={{
                            type: 'material',
                            name: 'face',
                            color: '#3E5481',
                        }}
                    />
                    <Input
                        value={last_name}
                        setValue={setLastName}
                        width="100%"
                        placeHolder="last name"
                        leftIcon={{
                            type: 'material',
                            name: 'people',
                            color: '#3E5481',
                        }}
                    />
                    {loading.isLoading ? <Loading /> : null}
                    <Input
                        type="Username"
                        value={username}
                        setValue={setUsername}
                        width="100%"
                        placeHolder="my_username"
                        leftIcon={{
                            type: 'material-community',
                            name: 'account-outline',
                            color: '#3E5481',
                        }}
                    />
                    <Input
                        keyboardType="email-address"
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
                    <Input
                        type="Password"
                        value={password}
                        setValue={setPassword}
                        width="100%"
                        type="Password"
                        placeHolder="password"
                    />
                    <Input
                        customValidation={validatePasswords}
                        value={confirmPassword}
                        setValue={setConfirmPassword}
                        width="100%"
                        type="Password"
                        placeHolder="Repeat password"
                    />
                </View>
                <View
                    style={{ width: '100%', display: 'flex', alignItems: 'center', marginTop: 20 }}
                >
                    <Button
                        press={registerWithEmail}
                        text="Register"
                        height={50}
                        containerStyle={{ width: '80%' }}
                    />
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
}

Register.propTypes = {};
Register.defaultProps = {};
