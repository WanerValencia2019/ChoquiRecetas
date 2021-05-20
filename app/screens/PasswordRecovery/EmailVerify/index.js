import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { SocialIcon  } from 'react-native-elements';

import EmailVerification from '../../../components/EmailVerification';


import styles from './styles';

export default function EmailVerify(props) {
    return (<EmailVerification/>);       
}

EmailVerify.propTypes = {}
EmailVerify.defaultProps = {}
