import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import StoreScreen from '../screens/StoreScreen'


const Stack = createStackNavigator()

export default function App() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#007bff' },
            }}>
            <Stack.Screen name="Store" component={StoreScreen} />
        </Stack.Navigator>
    );
}