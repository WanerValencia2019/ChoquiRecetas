import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { useSelector } from 'react-redux';

import EmailVerification from '../../../components/EmailVerification';
import { hideModal, showModal, verifyCode, clearPasswordRecovery } from '../actionCreators.js';

import styles from './styles';

export default function EmailVerify(props) {
    const {
        route: { params },
        navigation,
    } = props;
    const selector = (state) => state.passwordRecovery;
    return (
        <EmailVerification
            clear={clearPasswordRecovery}
            navigate={navigation.navigate}
            selector={selector}
            press={verifyCode}
            hide={hideModal}
            show={showModal}
            navigation={props.naviagation}
            email={params.email}
            message="Felicidades, has verificado tu cuenta, ya puedes iniciar sesión"
        />
    );
}

EmailVerify.propTypes = {};
EmailVerify.defaultProps = {};
