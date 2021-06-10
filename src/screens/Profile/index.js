import React from 'react'
import PropTypes from 'prop-types';
import { View, SafeAreaView, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/ButtonBasic';
import Text from '../../components/TextBasic';
import eats from './../../../assets/eats.png';

import { logout } from './actionCreators.js';

import styles from './styles';





export default function Profile(props) {
    const { navigation } = props;
    const profile = useSelector(state=>state.profile)
    const dispatch = useDispatch()
    return (
        <View style={styles.container}>
            <Image source={eats} style={{resizeMode:'contain'}} />
            <View>
                <Text text="Start Cooking" textStyle={{fontWeight:'bold'}} size={25} />
                <Text text="BIENVENIDO"  type="SecondaryText"  />
            </View>
            <Button  press={()=>dispatch(logout(profile.token, profile.user_id))}  text="Cerrar sesión" height={50}  containerStyle={{width:'80%'}} />
            <View style={{borderWidth:3, borderColor:'#000', width:200, borderRadius:30 }} />
        </View>
    );
}

Profile.propTypes = {}
Profile.defaultProps = {}

