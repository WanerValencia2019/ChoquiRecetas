import React from 'react'
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { SocialIcon  } from 'react-native-elements';

import Button from '../../components/ButtonBasic';
import Text from '../../components/TextBasic';


import styles from './styles';

export default function Login() {
    return (
        <View style={styles.container}>
            <View>
                <Text text="Welcome Back" textStyle={{fontWeight:'bold'}} size={25} />
                <Text text="Please enter your account here"  type="SecondaryText"  />
            </View>
            <View style={{width:'100%', display:'flex', alignItems:'center',}}>
                <Button text="Login" height={50}  containerStyle={{width:'80%'}} />
                <Text text="Or continue with"  type="SecondaryText" textStyle={{marginTop:12}} />
                <SocialIcon onPress={()=>console.log('logueado con facebook')} title='Sign In With Facebook' button type='facebook' style={{width:'80%', marginTop:12}}  />
            </View>
            {/*<View style={{borderWidth:3,bottom: 0,borderColor:'#000', width:200, borderRadius:30 }} /> */}
        </View>
    );
}

Login.propTypes = {}
Login.defaultProps = {}
