import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import Presentation from "./../screens/Presentation";
import Login from "./../screens/Login";

const stack = createStackNavigator();

const InitStack = () => (
    <stack.Navigator headerMode='none' initialRouteName="presentation">
        <stack.Screen name='presentation' component={Presentation} />
        <stack.Screen name='login' component={Login} />
    </stack.Navigator>
);



export default function App() {
    return (
        <NavigationContainer >
            <InitStack  />
        </NavigationContainer>
    )
}