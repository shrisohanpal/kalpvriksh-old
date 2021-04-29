import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import ForgetPasswordScreen from '../screens/ForgotPassword'
import ProfileScreen from '../screens/ProfileScreen'


const Stack = createStackNavigator()

export default function App() {

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#007bff' },
            }}
        >
            {userInfo ?
                <Stack.Screen name="Profile" component={ProfileScreen} />
                :
                <>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                    <Stack.Screen name="ForgotPassword" component={ForgetPasswordScreen} />
                </>
            }
        </Stack.Navigator>
    );
}