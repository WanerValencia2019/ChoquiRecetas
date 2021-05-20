import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import Presentation from "./../screens/Presentation";
import Login from "./../screens/Login";
import Register from "./../screens/Register";
import PasswordRecovery from "./../screens/PasswordRecovery";
import EmailVerify from "./../screens/PasswordRecovery/EmailVerify";


const stack = createStackNavigator();

const InitStack = () => (
    <stack.Navigator headerMode='none' initialRouteName="presentation">
        <stack.Screen  name='presentation' component={Presentation} />
        <stack.Screen name='login' component={Login} />
        <stack.Screen name='register' component={Register} />
        <stack.Screen name='passwordRecovery' component={PasswordRecovery} />
        <stack.Screen name='emailVerify' component={EmailVerify} />
    </stack.Navigator>
);



export default function App() {
    return (
        <NavigationContainer >
            <InitStack  />
        </NavigationContainer>
    )
}