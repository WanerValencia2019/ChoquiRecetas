import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("screen");

export default StyleSheet.create({
    container: {
        marginTop:24,
        display:'flex',
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'space-between',
        backgroundColor: '#F4F5F7'
    },  
    view_one: {
    	height: height * .42,
    	width: width,
    	backgroundColor: 'white',
    	display:'flex',
        justifyContent: 'space-evenly',
    },
    view_two:{
    	height: height * .436,
    	width: width,
    	marginTop: height * .005,
    	backgroundColor: 'white',
    	display:'flex',
        alignItems: 'center', 
        justifyContent: 'space-evenly',
    }

});