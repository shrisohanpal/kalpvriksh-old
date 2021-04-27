import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const ShippingScreen = ({ navigation }) => {
    return (
        <View>
            <Text>
                this is Shipping Screen
            </Text>
            <Button title="Go to Payment Screen" onPress={() => navigation.navigate('Payment')} />
        </View>
    )
}

const styles = StyleSheet.create({})

export default ShippingScreen