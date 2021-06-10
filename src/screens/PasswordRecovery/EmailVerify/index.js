import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { SocialIcon  } from 'react-native-elements';
import { useSelector } from 'react-redux';

import EmailVerification from '../../../components/EmailVerification';
import { hideModal, showModal, verifyCode } from './../actionCreators.js';

import styles from './styles';

export default function EmailVerify(props) {
	const { route: { params }, navigation } = props;
    return (<EmailVerification navigate={navigation.navigate} reducer={state=>state.passwordRecovery} press={verifyCode} hide={hideModal} show={showModal} navigation={props.naviagation} email={params.email} message={`La nueva contraseña ha sido enviada al correo`} />);       
}

EmailVerify.propTypes = {}
EmailVerify.defaultProps = {}
