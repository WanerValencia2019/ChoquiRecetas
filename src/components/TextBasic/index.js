import React, { useState } from 'react';
import { Text, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const { width, height } = Dimensions.get('screen');

const colors = {
    'Primary': '#1FCC79', 
    'Secondary': '#FF6464',
    'MainText': '#2E3E5C',
    'SecondaryText': '#9FA5C0',
    'Outline': '#D0DBEA',
    'White': '#FFF',
    'Form': '#F4F5F7'
}

export default function TextBasic({ text, type, textStyle, size, align, press, numberOfLines}) {

    return (
        <Text numberOfLines={numberOfLines} style={[{color:colors[type], fontSize:size, textAlign: align }, textStyle]}>
            {text}
        </Text>   
    );
};

TextBasic.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['Primary', 'Secondary','MainText','SecondaryText', 'Outline','White','Form']),
    size: PropTypes.number,
    align: PropTypes.oneOf(['right', 'left', 'center']),
    numberOfLines: PropTypes.number,
}

TextBasic.defaultProps = {
    text: 'default title',
    type: 'MainText',
    size: width * 0.05,
    align: 'center',
    numberOfLines: null
}