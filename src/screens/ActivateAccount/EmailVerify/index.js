import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { useSelector } from 'react-redux';

import EmailVerification from '../../../components/EmailVerification';
import { hideModal, showModal, verifyCode, clearActivateAccount } from './../actionCreators.js';

import styles from './styles';

export default function AccountActivateVerify(props) {
    const {
        route: { params },
        navigation,
    } = props;
    const selector = (state) => state.activateAccount;
    return (
        <EmailVerification
            clear={clearActivateAccount}
            navigate={navigation.navigate}
            selector={selector}
            press={verifyCode}
            hide={hideModal}
            show={showModal}
            navigation={props.navigation}
            email={params.email}
            message="Felicidades, has verificado tu cuenta, ya puedes iniciar sesión"
        />
    );
}

AccountActivateVerify.propTypes = {};
AccountActivateVerify.defaultProps = {};
