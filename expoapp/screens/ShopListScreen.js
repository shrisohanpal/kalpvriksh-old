import React from 'react'
import { View, Text, Button } from 'react-native'

export default ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                Shop List Screen
            </Text>
            <Button title="Go to Shop Edit Screen" onPress={() => navigation.navigate('ShopEdit', { id: 'sdf343' })} />
        </View>
    )
}