import { StyleSheet } from "react-native";

const colors = {
    'Primary': '#1FCC79', 
    'Secondary': '#FF6464',
    'MainText': '#2E3E5C',
    'SecondaryText': '#9FA5C0',
    'Outline': '#D0DBEA',
    'White': '#FFF',
    'Form': '#F4F5F7'
}

export default StyleSheet.create({
    container: {
        borderRadius: 32,
        borderWidth:1,
        borderColor:'#D0DBEA',
        padding:2,
        textDecorationLine:'none',
    },
    inputStyle: {
        textAlign:'left',
        color: colors.MainText,
        fontSize: 16
    },
    leftIcon: {
        marginLeft: 10,
    },
    rightIcon: {
        marginRight: 10,
    }

});