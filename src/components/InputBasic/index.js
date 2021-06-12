import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './styles';

const { width, height } = Dimensions.get('screen');

const colors = {
    Primary: '#1FCC79',
    Secondary: '#FF6464',
    MainText: '#2E3E5C',
    SecondaryText: '#9FA5C0',
    Outline: '#D0DBEA',
    White: '#FFF',
    Form: '#F4F5F7',
};

export default function InputBasic({
    inputError = '',
    message = '',
    value,
    setValue,
    type = 'Text',
    width,
    height,
    align,
    style,
    placeHolder,
    leftIcon,
    customValidation,
    keyboardType,
}) {
    const [textPassword, setTextPassword] = useState(false);
    const [error, setError] = useState(inputError);
    const [errorMessage, setErrorMessage] = useState(message);

    const type_password = (type) => {
        if (type === 'Password') {
            return {
                secureTextEntry: !textPassword,
                leftIcon: {
                    type: 'material-community',
                    name: 'lock-outline',
                    color: '#3E5481',
                },
                rightIcon: () => (
                    <Icon
                        onPress={() => setTextPassword(!textPassword)}
                        name={textPassword ? 'eye-off-outline' : 'eye-outline'}
                        type="material-community"
                        color="#9FA5C0"
                    />
                ),
            };
        }
    };
    const changeText = async (e) => {
        setValue(e.nativeEvent.text);
        switch (type) {
            case 'Email':
                validateEmail();
                break;
            case 'Username':
                validateUsername();
                break;
            case 'Password':
                validatePassword();
                break;
            default:
                break;
        }
        customValidation(error, setError, e.nativeEvent.text);
    };

    const validateEmail = () => {
        const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        reg.test(value) ? setError(false) : setError(true);
    };

    const validateUsername = () => {
        String(value).length >= 6 ? setError(false) : setError(true);
    };
    const validatePassword = () => {
        String(value).length >= 2 ? setError(false) : setError(true);
    };

    return (
        <Input
            leftIconContainerStyle={styles.leftIcon}
            rightIconContainerStyle={styles.rightIcon}
            leftIcon={leftIcon}
            inputStyle={[{ ...styles.inputStyle }]}
            inputContainerStyle={[
                { ...styles.container },
                { width, height, borderColor: error ? 'red' : '#2E3E5C' },
            ]}
            value={value}
            onChange={changeText}
            {...type_password(type)}
            placeholder={placeHolder}
            keyboardType={keyboardType || 'default'}
        />
    );
}

InputBasic.propTypes = {
    value: PropTypes.any.isRequired,
    setValue: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['Password', 'Email', 'Text', 'Number', 'Username']),
    width: PropTypes.any,
    height: PropTypes.any,
    align: PropTypes.oneOf(['right', 'left', 'center']),
    placeHolder: PropTypes.string,
    leftIcon: PropTypes.any,
    inputError: PropTypes.bool,
    customValidation: PropTypes.func,
};

InputBasic.defaultProps = {
    defaultValue: 'default value',
    type: 'Text',
    align: 'left',
    width: width * 0.7,
    height: height * 0.06,
    inputError: false,
    customValidation: () => null,
};
