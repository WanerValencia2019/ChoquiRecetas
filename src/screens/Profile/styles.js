import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("screen");

export default StyleSheet.create({
    container: {
        marginTop:26,
        display:'flex',
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'space-between',
        backgroundColor: '#F4F5F7',
        bottom: 10
    },  
    view_one: {
    	height: height * .38,
    	width: width,
    	backgroundColor: 'white',
    	display:'flex',
        justifyContent: 'space-evenly',
        paddingBottom: 5,
    },
    view_two:{
    	height: height * .486,
    	width: width,
    	marginTop: height * .005,
    	backgroundColor: 'white',
    }

});