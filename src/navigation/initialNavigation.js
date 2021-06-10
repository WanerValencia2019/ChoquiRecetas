import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import Presentation from '../screens/Presentation';
import Login from '../screens/Login';
import Register from '../screens/Register';
import PasswordRecovery from '../screens/PasswordRecovery';
import EmailVerify from '../screens/PasswordRecovery/EmailVerify';
import Profile from '../screens/Profile';

const stack = createStackNavigator();
const tab = createBottomTabNavigator();

const tabBarOptions = {
    activeTintColor: '#1FCC79',
    inactiveTintColor: '#9FA5C0',
    style: {
        backgroundColor: '#FFFFFF',
        borderTopColor: 'transparent',
    },
};

const AuthStack = () => (
    <stack.Navigator headerMode="none" initialRouteName="presentation">
        <stack.Screen name="presentation" component={Presentation} />
        <stack.Screen name="login" component={Login} />
        <stack.Screen name="register" component={Register} />
        <stack.Screen name="passwordRecovery" component={PasswordRecovery} />
        <stack.Screen name="emailVerify" component={EmailVerify} />
    </stack.Navigator>
);

const InitialStack = () => (
    <tab.Navigator initialRouteName="profile" tabBarOptions={tabBarOptions}>
        <tab.Screen
            name="home"
            component={Profile}
            options={{
                tabBarLabel: 'Inicio',
                tabBarIcon: ({ focused }) => {
                    console.log(focused)
                    return <Icon name="home" type="material-community"  color={focused ? '#1FCC79' : '#9FA5C0'} />;
                },
            }}
        />
        <tab.Screen
            name="upload"
            component={Profile}
            options={{
                tabBarLabel: 'Subir',
                tabBarIcon: ({ focused }) => {
                    console.log(focused)
                    return <Icon name="upload" type="material-community"  color={focused ? '#1FCC79' : '#9FA5C0'} />;
                },
            }}
        />
         <tab.Screen
            name="notification"
            component={Profile}
            options={{
                tabBarLabel: 'Notificación',
                tabBarIcon: ({ focused }) => {
                    console.log(focused)
                    return <Icon name="bell" type="material-community"  color={focused ? '#1FCC79' : '#9FA5C0'} />;
                },
            }}
        />
         <tab.Screen
            name="profile"
            component={Profile}
            options={{
                tabBarLabel: 'Perfil',
                tabBarIcon: ({ focused }) => {
                    console.log(focused)
                    return <Icon name="account" type="material-community"  color={focused ? '#1FCC79' : '#9FA5C0'} />;
                },
            }}
        />
    </tab.Navigator>
);

export default function App() {
    const profile = useSelector((state) => state.profile);

    return (
        <NavigationContainer>{profile.logged ? <InitialStack /> : <AuthStack />}</NavigationContainer>
    );
}
