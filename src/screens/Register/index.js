import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { View, TouchableOpacity, ImageBackground } from 'react-native';
import { SocialIcon  } from 'react-native-elements';

import Button from '../../components/ButtonBasic';
import Text from '../../components/TextBasic';
import Input from '../../components/InputBasic';

import styles from './styles';
import eats from './../../../assets/eats.png';

export default function Register() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [confirmPassword, setConfirmPassword ] = useState('');
    const [ username, setUsername ] = useState('');

    const validatePasswords = (args) =>{
        console.log("HOLA ",args)
    }

    return (
        <View style={styles.container}>
            <View style={{marginBottom: 50}}>
                <Text text="Welcome" textStyle={{fontWeight:'bold'}} size={25} />
                <Text text="Please enter your account here"   type="SecondaryText"   />
            </View>
            <View style={{display:'flex', width:'90%'}}>
                <Input type="Username" value={username} setValue={setUsername} width="100%"  placeHolder="my_username"  leftIcon={{type:'material-community','name':'account-outline', color:'#3E5481'}} />
                <Input type="Email" value={email} setValue={setEmail} width="100%"  placeHolder="email@example.com"  leftIcon={{type:'material-community','name':'email-outline', color:'#3E5481'}} />
                <Input customValidation={(args)=>validatePasswords(args)} type="Password" value={password} setValue={setPassword}  width="100%"  type="Password" placeHolder="password"  />
                <Input value={confirmPassword} setValue={setConfirmPassword}  width="100%"  type="Password" placeHolder="password"  />      
            </View>
            <View style={{width:'100%', display:'flex', alignItems:'center',marginTop:20}}>
                <Button text="Register" height={50}  containerStyle={{width:'80%'}} />
            </View>
        </View>
    );
}

Register.propTypes = {}
Register.defaultProps = {}