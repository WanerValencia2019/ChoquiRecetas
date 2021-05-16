import { StyleSheet, Dimensions } from 'react-native';

const {width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    container: {
        marginTop:24,
        display:'flex',
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'space-evenly',
    },  
});