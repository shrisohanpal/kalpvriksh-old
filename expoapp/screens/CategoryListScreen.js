import React from 'react'
import { View, Text, Button } from 'react-native'

export default ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                Category List Screen
            </Text>
            <Button title="Go to Category Edit Screen" onPress={() => navigation.navigate('CategoryEdit')} />
        </View>
    )
}