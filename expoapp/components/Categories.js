import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TouchableOpacity, View, Text, ActivityIndicator, FlatList, StyleSheet } from 'react-native'
import Message from './Message'
import Product from './SquareProduct'
import { listCategorys } from '../actions/categoryActions'
import { listProductsByCat } from '../actions/productActions'
import Colors from '../constants/Colors'


const Category = ({ category, navigation }) => {

    const catId = category._id
    var a = 0, b = 1, c = 2, d = 3
    const productList = useSelector(state => state.productList)
    const { loading: loadingProducts, error: errorProducts, products } = productList

    useEffect(() => {
        a = 3
    })

    return (
        <View>
            {loadingProducts ? (
                <ActivityIndicator size="large" color={Colors.primary} />
            ) : errorProducts ? (
                <Message data={errorProducts} />
            ) :
                <View>
                    <Text style={{ fontSize: 20, alignSelf: 'center', margin: 10 }}>
                        {category.name}
                    </Text>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Product product={products[a]} navigation={navigation} />
                            <Product product={products[b]} navigation={navigation} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Product product={products[c]} navigation={navigation} />
                            <Product product={products[d]} navigation={navigation} />
                        </View>
                    </View>
                    {/*
                        products.map((product) => {
                            return (
                                <View>
                                    <Product product={product} navigation={navigation} />
                                </View>
                            )
                        })
                    */ }
                </View>
            }
        </View>
    )
}

const Categories = ({ navigation }) => {

    const dispatch = useDispatch()

    const categoryList = useSelector(state => state.categoryList)
    const { loading, error, categorys } = categoryList

    useEffect(() => {
        dispatch(listCategorys())
    }, [dispatch])

    return (
        <View>
            {loading ? <ActivityIndicator size="large" color={Colors.primary} />
                : error
                    ? (<Message data={error} />)
                    :
                    categorys.map((category) => {
                        //   console.log(categorys)
                        return (
                            <Category key={category._id} category={category} navigation={navigation} />
                        )
                    })
            }
        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        fontSize: 25
    }
})

export default Categories