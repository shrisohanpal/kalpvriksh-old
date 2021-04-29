import React from 'react'
import { View, Text, Button } from 'react-native'

export default ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                Product List Screen
            </Text>
            <Button title="Go to Product Edit Screen" onPress={() => navigation.navigate('ProductEdit', { id: 'sdf343' })} />
        </View>
    )
}