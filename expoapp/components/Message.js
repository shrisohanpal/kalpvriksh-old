import React from 'react'
import { View, Text } from 'react-native'

const Message = ({ data }) =>
{
    return (
        <View>
            <Text>{data}</Text>
        </View>
    )
}

export default Message
