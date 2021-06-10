import React, { useState } from 'react';
import { Button, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './styles';

const colors = {
    'Primary': '#1FCC79', 
    'Secondary': '#FF6464',
    'MainText': '#2E3E5C',
    'SecondaryText': '#9FA5C0',
    'Light': '#FFFFFF',
    'Outline': '#D0DBEA'
}

export default function ButtonBasic({ text, icon, type, height, titleStyle, press, containerStyle, disabled}) {

    const setTextColor = () => (type === 'Light' ? colors.SecondaryText: '#FFFFFF')

    return (
        <Button 
        icon={icon || null} 
        title={text}
        disabled={disabled}
        titleStyle={{color: setTextColor()}}
        buttonStyle={{backgroundColor: colors[type], height:height}} containerStyle={[styles.container,containerStyle,{elevation: type === 'Light' ? 0:3} ]} onPress = {()=>press()}  />
    );
};

ButtonBasic.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.object,
    press: PropTypes.func,
    type: PropTypes.oneOf(['Primary', 'Secondary','MainText','SecondaryText','Light']),
    height: PropTypes.number,
    textColor: PropTypes.string,
    disabled: PropTypes.bool
}

ButtonBasic.defaultProps = {
    text: 'click me',
    press: () => console.log('click me'),
    type: 'Primary',
    height: 50,
    disabled: false
}
