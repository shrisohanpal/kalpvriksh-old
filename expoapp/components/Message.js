import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Message = ({ data }) => {
    return (
        <View style={styles.message}>
            <Text style={styles.text}>
                {data}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    message: {
        //  width: '100%',
        borderRadius: 10,
        margin: 10,
        backgroundColor: 'red'
    },
    text: {
        fontSize: 20,
        color: '#fff',
        margin: 10
    }
})

export default Message
