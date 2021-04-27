import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Message = ({ data, variant }) => {
    return (
        <View style={{
            ...styles.message, backgroundColor: variant === 'success' ? '#3CB371' : 'red'
        }}>
            <Text style={styles.text}>
                {data}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    message: {
        borderRadius: 10,
        margin: 10,
    },
    text: {
        fontSize: 20,
        color: '#fff',
        margin: 10
    }
})

export default Message
