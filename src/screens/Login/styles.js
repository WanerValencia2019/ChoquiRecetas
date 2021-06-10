import { StyleSheet, Dimensions } from 'react-native';

const {width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    
    keyboardContainer: {
    	flex:1,
    },
    container: {
    	height: height,
        marginTop:24,
        alignItems: 'center', 
        justifyContent: 'space-evenly',
        backgroundColor: 'white'
    }, 

});