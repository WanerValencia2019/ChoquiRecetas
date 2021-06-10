import React from 'react'
import PropTypes from 'prop-types';
import { View, SafeAreaView, Image } from 'react-native';

import Button from '../../components/ButtonBasic';
import Text from '../../components/TextBasic';
import eats from './../../../assets/eats.png';

import styles from './styles';




export default function Presentation(props) {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <Image source={eats} style={{resizeMode:'contain'}} />
            <View>
                <Text text="Start Cooking" textStyle={{fontWeight:'bold'}} size={25} />
                <Text text="Let’s join our community to cook better food!"  type="SecondaryText"  />
            </View>
            <Button press={()=>navigation.navigate('login')}  text="Get Started" height={50}  containerStyle={{width:'80%'}} />
            <View style={{borderWidth:3, borderColor:'#000', width:200, borderRadius:30 }} />
        </View>
    );
}

Presentation.propTypes = {}
Presentation.defaultProps = {}

