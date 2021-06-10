import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');



export default function AlertMessage({message = ""}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: width * 0.9,
        height: height * 0.03,
        backgroundColor: 'red',
        borderRadius: 15,
    },
    text: {
        color: 'white',
        fontSize: height * 0.015,
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
});

AlertMessage.propTypes = {
  message: PropTypes.string.isRequired
}


