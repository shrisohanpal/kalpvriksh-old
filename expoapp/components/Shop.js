import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { baseUrl } from '../urls'

const Shop = ({ shop, navigation }) => {
    // console.log(shop)
    return (
        <View style={styles.shop}>
            <View style={styles.shopContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("Shop")}>
                    <Image style={styles.image}
                        source={{ uri: `${baseUrl}/api${shop.image}` }}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            {shop.name}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
    /* 
                 <TouchableOpacity onPress={() => props.props.navigation.navigate('CropDetails', { item: props.item })}>
                     <Image style={styles.image} source={props.item.imguri} />
     );*/
};

const styles = StyleSheet.create({
    shop: {
        height: 200,
        width: 150 + 20,
        //backgroundColor: '#f5f5f5',
        paddingHorizontal: 10
    },
    shopContainer: {
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 10,
        elevation: 5,
        //  backgroundColor:'red'
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10
    },
    textContainer: {
        height: 30,
        paddingHorizontal: 5,
        // backgroundColor: 'green'
    },
    text: {
        fontSize: 15
    }
})

export default Shop