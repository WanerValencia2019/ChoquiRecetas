import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { SocialIcon  } from 'react-native-elements';

import Button from '../../components/ButtonBasic';
import Text from '../../components/TextBasic';
import Input from '../../components/InputBasic';

import styles from './styles';

export default function Login() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    return (
        <View style={styles.container}>
            <View>
                <Text text="Welcome Back" textStyle={{fontWeight:'bold'}} size={25} />
                <Text text="Please enter your account here"  type="SecondaryText"   />
            </View>
            <View style={{display:'flex', width:'90%'}}>
                <Input value={email} setValue={setEmail} width="100%"  placeHolder="email@example.com"  leftIcon={{type:'material-community','name':'email-outline', color:'#3E5481'}} />
                <Input value={password} setValue={setPassword}  width="100%"  type="Password" placeHolder="password"  />
                <TouchableOpacity onPress={()=>console.log('yendo a recuperar contraseña')}>
                   <Text text="¿Forgot password?" align="right" size={15} textStyle={{marginTop:-16, marginRight:10}} />
                </TouchableOpacity>            
            </View>
            <View style={{width:'100%', display:'flex', alignItems:'center',}}>
                <Button text="Login" height={50}  containerStyle={{width:'80%'}} />
                <Text text="Or continue with"  type="SecondaryText" textStyle={{marginTop:25}} />
                <SocialIcon onPress={()=>console.log('logueado con facebook')} title='Sign In With Facebook' button type='facebook' style={{width:'80%', marginTop:25}}  />
                <View style={{display:'flex', flexDirection:'row', width:'100%',justifyContent:'center', marginTop:18}} >
                    <Text text="¿Don’t have any account?"  size={15} textStyle={{marginTop:-16, marginRight:10}} />
                    <TouchableOpacity onPress={()=>console.log('yendo a registrarme')}>
                           <Text text="Sign Up" type="Primary"  size={15} textStyle={{marginTop:-16, marginRight:10}} />
                    </TouchableOpacity>  
                </View>             
            </View>
            {/*<View style={{borderWidth:3,bottom: 0,borderColor:'#000', width:200, borderRadius:30 }} /> */}
        </View>
    );
}

Login.propTypes = {}
Login.defaultProps = {}
