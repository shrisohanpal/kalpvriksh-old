import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { createOrder } from '../actions/orderActions'
import { ORDER_CREATE_RESET } from '../constants/orderConstants'
import { USER_DETAILS_RESET } from '../constants/userConstants'

const PlaceOrderScreen = ({ navigation }) => {

    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)

    if (!cart.shippingAddress.address) {
        navigation.navigate('Shipping')
    } else if (!cart.paymentMethod) {
        navigation.navigate('Payment')
    }
    //   Calculate prices
    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2)
    }

    cart.itemsPrice = addDecimals(
        cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    )
    cart.shippingPrice = 0
    cart.taxPrice = 0
    cart.totalPrice = (
        Number(cart.itemsPrice) +
        Number(cart.shippingPrice) +
        Number(cart.taxPrice)
    ).toFixed(2)

    const orderCreate = useSelector((state) => state.orderCreate)
    const { order, success, error } = orderCreate

    useEffect(() => {
        if (success) {
            // history.push(`/order/${order._id}`)
            navigation.navigate('Profile')
            dispatch({ type: USER_DETAILS_RESET })
            dispatch({ type: ORDER_CREATE_RESET })
        }
        // eslint-disable-next-line
    }, [navigation, success])

    const placeOrderHandler = () => {
        dispatch(
            createOrder({
                orderItems: cart.cartItems,
                shippingAddress: cart.shippingAddress,
                paymentMethod: cart.paymentMethod,
                itemsPrice: cart.itemsPrice,
                shippingPrice: cart.shippingPrice,
                taxPrice: cart.taxPrice,
                totalPrice: cart.totalPrice,
            })
        )
    }

    return (
        <View>
            <Text>
                Place Order Screen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default PlaceOrderScreen