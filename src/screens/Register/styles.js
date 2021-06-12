import { StyleSheet, Dimensions } from 'react-native';

const {width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    /*container: {
        marginTop:24,
        display:'flex',
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
        padding: 5,
        backgroundColor: 'white',
    },*/
    keyboardContainer: {
    	flex:1,
    	marginTop:24,
    },
    container: {
    	height: height,
        alignItems: 'center', 
        justifyContent: 'center',
        padding: 5,
        backgroundColor: 'white'
    }, 
  
});