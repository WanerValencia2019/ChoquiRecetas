import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { Input, Icon } from "react-native-elements";
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

export default function InputBasic({ value, setValue, type, width, height, align, style, placeHolder, leftIcon }) {
    const [textPassword, setTextPassword] = useState(false);


    const type_password = (type) => {
        if(type==='Password') {
            return {
                secureTextEntry: !textPassword,
                leftIcon: {
                    type:'material-community',
                    name:'lock-outline',
                    color: '#3E5481'
                },
                rightIcon: ()=>(
                    <Icon onPress={() => setTextPassword(!textPassword)} name={textPassword ? 'eye-off-outline':'eye-outline'} type="material-community" color='#9FA5C0' />
                ) 
            }
        }
    }

    return (
       <Input leftIconContainerStyle={styles.leftIcon} rightIconContainerStyle={styles.rightIcon} leftIcon={leftIcon} inputStyle={[{...styles.inputStyle}]} inputContainerStyle={[{...styles.container},{width: width, height:height}]}   value={value}   onChange={(e)=>setValue(e.nativeEvent.text)} {...type_password(type)}  placeholder={placeHolder} />
    );
};

InputBasic.propTypes = {
    value: PropTypes.any.isRequired,
    setValue: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['Password', 'Email','Text', 'Number']),
    width: PropTypes.any,
    height: PropTypes.any,
    align: PropTypes.oneOf(['right', 'left', 'center']),
    placeHolder:PropTypes.string,
    leftIcon:PropTypes.any
}

InputBasic.defaultProps = {
    defaultValue: 'default value',
    type: 'Text',
    align: 'left',
    width: width*0.7,
    height: height*0.06

}