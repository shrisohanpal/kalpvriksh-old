import React from 'react'
import { View, Text, Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen'
import ShopScreen from '../screens/ShopScreen'
import ProductScreen from '../screens/ProductScreen'
import SearchScreen from '../screens/SearchScreen'
import CartScreen from '../screens/CartScreen'

const Stack = createStackNavigator()

export default function App({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#007bff' },
            }}
            initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Kalpvriksh',
                    headerLeft: () => (
                        <FontAwesome name="bars" size={25} color='#ffffff' style={{ margin: 10 }} onPress={() => navigation.openDrawer()} />
                    ),
                    headerRight: () => (
                        <View style={{ flexDirection: 'row' }}>
                            <Ionicons name="ios-search" size={25} color='#ffffff' style={{ margin: 10 }} onPress={() => navigation.navigate('Search')} />
                            <Ionicons name="ios-cart" size={25} color='#ffffff' style={{ margin: 10 }} onPress={() => navigation.navigate('Cart')} />
                        </View >
                    )
                }}
            />
            <Stack.Screen name="Shop" component={ShopScreen} />
            <Stack.Screen name="Product" component={ProductScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
    );
}