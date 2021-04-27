import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ScrollView, View, FlatList, Dimensions, Text, ActivityIndicator, Image, Button, StyleSheet } from 'react-native'
import { listProductDetails } from '../actions/productActions'
import Message from '../components/Message'
import Colors from '../constants/Colors'
import { baseUrl } from '../urls'

const width = Dimensions.get('window').width

const ProductScreen = ({ navigation, route }) => {

    //  console.log(route.params.id)

    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {
        dispatch(listProductDetails(route.params.id))
    }, [dispatch, route])

    const addToCartHandler = () => {
        //      history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    return (
        <View style={styles.container}>
            {loading ?
                <ActivityIndicator size="large" color={Colors.primary} />
                : error ? <Message data={error} />
                    : (
                        <ScrollView>
                            <View>
                                <FlatList
                                    keyExtractor={(item, index) => String(1 + index)}
                                    data={product.images}
                                    renderItem={({ item }) => <Image style={styles.image}
                                        source={{ uri: `${baseUrl}/api${item}` }} />}
                                    showsHorizontalScrollIndicator={false}
                                    horizontal={true}
                                    snapToInterval={width}
                                    decelerationRate="fast"
                                    bounces={false}
                                />
                                <Text style={styles.name}>{product.name}</Text>
                                <Text style={styles.text}>Price: ₹{product.price}</Text>
                                <Text style={styles.text}>Description: {product.description}</Text>
                                <View style={styles.buttonContainer}>
                                    <Button
                                        title="Add To Cart"
                                        onPress={() => navigation.navigate('Cart', { id: product._id })}
                                    />
                                </View>
                            </View>
                        </ScrollView>
                    )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 10
    },
    product: {
        flex: 1,// backgroundColor: 'red'
    },
    image: {
        width: width,
        height: 200,
    },
    name: {
        margin: 10,
        fontSize: 25
    },
    text: {
        margin: 10,
        fontSize: 18
    },
    buttonContainer: {
        margin: 10,
    }
})

export default ProductScreen