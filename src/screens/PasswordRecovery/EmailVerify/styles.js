import { StyleSheet, Dimensions } from 'react-native';

const {width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    
    container: {
        marginTop:24,
        display:'flex',        
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: 'white'
    },  
});