import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'


const PaymentScreen = ({ navigation }) => {
    return (
        <View>
            <Text>
                this is  Payment Screen
            </Text>
            <Button title="Go to Place Order Screen" onPress={() => navigation.navigate('PlaceOrder')} />
        </View>
    )
}

export default PaymentScreen