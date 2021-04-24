import React from 'react'
import { View, Text, Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen'
import ShopScreen from '../screens/ShopScreen'
import ProductScreen from '../screens/ProductScreen'

const Stack = createStackNavigator()

export default function App() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Kalpvriksh',
                    headerStyle: {
                        backgroundColor: '#007bff',
                    },
                    headerTintColor: '#fff',
                    headerLeft: () => (
                        <FontAwesome name="bars" size={25} color='#ffffff' style={{ margin: 10 }} />
                    ),
                    headerRight: () => (
                        <View style={{ flexDirection: 'row' }}>
                            <Ionicons name="ios-search" size={25} color='#ffffff' style={{ margin: 10 }} />
                            <Ionicons name="ios-cart" size={25} color='#ffffff' style={{ margin: 10 }} />
                        </View >
                    )
                }}
            />
            <Stack.Screen name="Product" component={ProductScreen} />
            <Stack.Screen name="Shop" component={ShopScreen} />

        </Stack.Navigator>
    );
}