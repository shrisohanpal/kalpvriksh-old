import React from 'react'
import { View, Text } from 'react-native'

const Shop = ({ item }) =>
{
    //  console.log(item)
    return (
        <View>
            <Text>
                {item._id}
            </Text>
        </View>
    );
};

export default Shop