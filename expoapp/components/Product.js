import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Product = ({ product, navigation }) => {
    //  console.log(navigation)
    return (
        <View style={styles.product}>
            <View style={styles.productContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("Product")}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            {product.name}
                        </Text>
                    </View>
                    <Image style={styles.image} source={require('../assets/product.png')} />
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            {product.price}
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
    product: {
        height: 250,
        width: 150 + 20,
        //backgroundColor: '#f5f5f5',
        paddingHorizontal: 10
    },
    productContainer: {
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

export default Product