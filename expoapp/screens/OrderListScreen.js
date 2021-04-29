import React from 'react'
import { View, Text, Button } from 'react-native'

export default ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                Order List Screen
            </Text>
            <Button title="Go to Order Screen" onPress={() => navigation.navigate('Order', { id: 'sdf343' })} />
        </View>
    )
}