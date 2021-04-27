import React from 'react'
import { View, Text, Button } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import Ionicons from 'react-native-vector-icons/Ionicons'

import UserListScreen from '../screens/UserListScreen'


const Stack = createStackNavigator()

const ShopNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#007bff' }
            }}>
            <Stack.Screen name="UserList" component={UserListScreen} />
            <Stack.Screen name="UserEdit" component={UserListScreen} />
        </Stack.Navigator>
    )
}

const ProductsNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#007bff' }
            }}>
            <Stack.Screen name="UserList" component={UserListScreen} />
            <Stack.Screen name="UserEdit" component={UserListScreen} />
        </Stack.Navigator>
    )
}

const OrdersNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#007bff' }
            }}>
            <Stack.Screen name="UserList" component={UserListScreen} />
            <Stack.Screen name="UserEdit" component={UserListScreen} />
        </Stack.Navigator>
    )
}

const BottomTab = createBottomTabNavigator()


export default function App() {
    return (
        <BottomTab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case 'My Shop':
                            iconName = 'home-outline'; break
                        case 'Products':
                            iconName = 'cube-outline'; break
                        case 'Orders':
                            iconName = 'alert-circle-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#007bff',
                inactiveTintColor: 'gray',
            }}
            initialRouteName="Users">

            <BottomTab.Screen name="My Shop" component={ShopNavigator} />
            <BottomTab.Screen name="Products" component={ProductsNavigator} />
            <BottomTab.Screen name="Orders" component={OrdersNavigator} />

        </BottomTab.Navigator>
    );
}