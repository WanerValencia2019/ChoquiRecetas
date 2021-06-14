import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SocialIcon, Divider } from 'react-native-elements';
import * as Facebook from 'expo-facebook';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../../components/ButtonBasic';
import Text from '../../components/TextBasic';
import Input from '../../components/InputBasic';
import AlertMessage from '../../components/AlertMessage';
import Loading from '../../components/Loading';

import { login, clearLogin } from './actionCreators.js';
import { showAlert, hideAlert } from '../../components/AlertMessage/actionCreators.js';

import styles from './styles';

const { width } = Dimensions.get('screen')

export default function Login(props) {
    const { navigation } = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // redux
    const loginReducer = useSelector((state) => state.login);
    const loading = useSelector((state) => state.loading);
    const alertMessage = useSelector((state) => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(hideAlert());
            dispatch(clearLogin());
        };
    }, []);

    const loginWithFacebook = async () => {
        await Facebook.initializeAsync({
            appId: '807084246600631',
        });
        const { type, token, permissions, declinedPermissions } =
            await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile'],
            });

        if (type === 'success') {
            console.log(token);
        }
    };

    const loginWithEmail = () => {
        if (email.trim().length < 5 || password.trim().length < 5) {
            dispatch(showAlert('Debes llenar correctamente todos los campos'));
        } else {
            dispatch(hideAlert());
            dispatch(login(email, password));
        }
    };

    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.keyboardContainer}>
            <View style={styles.container}>
                <View>
                    <Text text="Welcome Back" textStyle={{ fontWeight: 'bold' }} size={25} />
                    <Text text="Please enter your account here" type="SecondaryText" />
                </View>

                <View style={{ display: 'flex', width: '90%' }}>
                    <View style={{ marginBottom: 10 }}>
                        {alertMessage.showAlert || loginReducer.error ? (
                            <AlertMessage message={alertMessage.message || loginReducer.message} />
                        ) : null}
                        {loading.isLoading ? <Loading /> : null}
                    </View>
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
                        keyboardType="email-address"
                    />
                    <Input
                        value={password}
                        setValue={setPassword}
                        width="100%"
                        type="Password"
                        placeHolder="password"
                    />
                    <TouchableOpacity onPress={() => navigation.navigate('passwordRecovery')}>
                        <Text
                            text="¿Forgot password?"
                            align="right"
                            size={15}
                            textStyle={{ marginTop: -16, marginRight: 10 }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                    <Button
                        text="Login"
                        height={50}
                        press={() => loginWithEmail()}
                        containerStyle={{ width: '80%' }}
                    />
                    <Text
                        text="Or continue with"
                        type="SecondaryText"
                        textStyle={{ marginTop: 25 }}
                    />
                    <SocialIcon
                        onPress={() => loginWithFacebook()}
                        title="Sign In With Facebook"
                        button
                        type="facebook"
                        style={{ width: '80%', marginTop: 25 }}
                    />
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 18,
                        }}
                    >
                        <Text
                            text="¿Don’t have any account?"
                            size={15}
                            textStyle={{ marginRight: 10 }}
                        />
                        <TouchableOpacity onPress={() => navigation.navigate('register')}>
                            <Text
                                text="Sign Up"
                                type="Primary"
                                size={15}
                                textStyle={{ marginRight: 10 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <Divider width = {width * 0.65} />
                        <TouchableOpacity onPress={() => navigation.navigate('activateAccount')}>
                            <Text
                                text="Activar mi cuenta"
                                type="Primary"
                                size={15}
                                textStyle={{ marginTop: 20, marginBottom: 20 }}
                            />
                        </TouchableOpacity>
                </View>
                {/* <View style={{borderWidth:3,bottom: 0,borderColor:'#000', width:200, borderRadius:30 }} /> */}
            </View>
        </KeyboardAwareScrollView>
    );
}

Login.propTypes = {};
Login.defaultProps = {};
