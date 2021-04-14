import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import MenuNavigator from './MenusNavigator.js'


function CustomDrawerContent(props)
{
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem
                label={() => { return (<Image style={{ margin: 0, padding: 0, width: 'auto', height: 100 }} source={require('../assets/banners/a.jpg')} />) }}
                onPress={() => { }} />
            <DrawerItemList {...props} />
            <DrawerItem
                label="Share this App"
                onPress={() => { }} />
        </DrawerContentScrollView>
    );
}

function SellerScreen({ navigation })
{
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Register as a Seller</Text>
        </View>
    );
}
//  onPress={() => navigation.navigate('Notifications')}

const Drawer = createDrawerNavigator();

export default function App()
{
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />} initialRouteName="Menu">
                <Drawer.Screen name="Menu" component={MenuNavigator} />
                <Drawer.Screen name="Seller" component={SellerScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}