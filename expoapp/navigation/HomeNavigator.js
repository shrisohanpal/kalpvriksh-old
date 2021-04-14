import React from 'react'
import { View, Text, Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/HomeScreen'

function ProductScreen({ navigation })
{
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>this is Product Screen</Text>
        </View>
    );
}

const Stack = createStackNavigator()

export default function App()
{
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Product" component={ProductScreen} />
        </Stack.Navigator>
    );
}