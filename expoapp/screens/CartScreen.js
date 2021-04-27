import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, Image, Button, StyleSheet, FlatList } from 'react-native'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'
import { ScrollView } from 'react-native-gesture-handler'


const CartItem = ({ item }) => {
    console.log(item)
    return (
        <View>
            <Image style={styles.image} source={{ uri: `${baseUrl}/api${item.images[0]}` }} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.text}>Price: {item.price}</Text>
        </View>
    )
}

const CartScreen = ({ route, navigation }) => {

    const productId = route.params && route.params.id

    const qty = 1

    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        //    history.push('/login?redirect=shipping')
    }

    return (
        <View>
            {
                cartItems.length === 0
                    ? <Message data="Your cart is empty" variant="success" />
                    : <ScrollView>
                        <FlatList
                            keyExtractor={(item, index) => item._id}
                            data={cartItems}
                            renderItem={({ item }) => <CartItem item={item} />}
                        //    showsHorizontalScrollIndicator={false}
                        />
                    </ScrollView>
            }
        </View>
    )

    return (
        <View>
            <Text>
                This is Cart Screen
            </Text>
            <Button title="Go to Shipping" onPress={() => navigation.navigate('Shipping')} />
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
        //   width: width,
        height: 200,
    },
    name: {
        margin: 10,
        fontSize: 25
    },
    text: {
        margin: 10,
        fontSize: 18
    }
})

export default CartScreen