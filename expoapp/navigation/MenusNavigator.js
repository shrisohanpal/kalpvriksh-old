import React from 'react'
import { View, Text, Button } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeNavigator from './HomeNavigator'

function HomeScreen({ navigation })
{
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>this is Home Screen</Text>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    );
}

function CategoriesScreen({ navigation })
{
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>this is Categories</Text>
        </View>
    );
}

function LocationScreen({ navigation })
{
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>this is Location Screen</Text>
        </View>
    );
}

function AccountScreen({ navigation })
{
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>this is Account Screen</Text>
        </View>
    );
}

const BottomTab = createBottomTabNavigator()


export default function App()
{
    return (
        <BottomTab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) =>
                {
                    let iconName;
                    switch (route.name) {
                        case 'Home':
                            iconName = 'home'; break
                        case 'Categories':
                            iconName = 'duplicate'; break
                        case 'Location':
                            iconName = 'location'; break
                        case 'Account':
                            iconName = 'person'; break
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#007bff',
                inactiveTintColor: 'gray',
            }}
            initialRouteName="Home">
            <BottomTab.Screen name="Home" component={HomeNavigator} />
            <BottomTab.Screen name="Categories" component={CategoriesScreen} />
            <BottomTab.Screen name="Location" component={LocationScreen} />
            <BottomTab.Screen name="Account" component={AccountScreen} />
        </BottomTab.Navigator>
    );
}