import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { SocialIcon  } from 'react-native-elements';

import Button from '../../components/ButtonBasic';
import Text from '../../components/TextBasic';
import Input from '../../components/InputBasic';

import styles from './styles';

export default function PasswordRecovery(props) {
    const [ email, setEmail ] = useState('');
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <View style={{marginBottom: 50}} >
                <Text text="Password recovery" textStyle={{fontWeight:'bold'}} size={25} />
                <Text text="Enter your email to recover your password"  type="SecondaryText"   />
            </View>
            <View style={{display:'flex', width:'100%', alignItems:'center', justifyContent:'center'}}>
                <Input value={email} setValue={setEmail} width="100%"   placeHolder="email@example.com"  leftIcon={{type:'material-community','name':'email-outline', color:'#3E5481'}} />                         
            </View>
            <View style={{width:'100%', display:'flex', alignItems:'center',padding:10}}>
                <Button text="Recover" height={50}   containerStyle={{width:'100%'}} press={()=>navigation.navigate('emailVerify')} />                     
            </View>
        </View>
    );
}

PasswordRecovery.propTypes = {}
PasswordRecovery.defaultProps = {}
