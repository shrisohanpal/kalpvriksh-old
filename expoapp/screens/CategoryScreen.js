import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TouchableOpacity, View, Text, ActivityIndicator, FlatList, StyleSheet } from 'react-native'

import Message from '../components/Message'
import { listCategorys } from '../actions/categoryActions'


const Category = ({ category, navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Product")}>
            <Text>{category.name}</Text>
        </TouchableOpacity>
    )
}


const CategoryScreen = ({ navigation }) => {

    const dispatch = useDispatch()

    const categoryList = useSelector(state => state.categoryList)
    const { loading, error, categorys } = categoryList

    useEffect(() => {
        dispatch(listCategorys())
    }, [dispatch])

    return (
        <View>
            <Text style={styles.text}>Categories</Text>
            {loading ? <ActivityIndicator size="large" />
                : error
                    ? (<Message data={error} />)
                    : (
                        <FlatList
                            keyExtractor={(item, index) => item._id}
                            data={categorys}
                            renderItem={({ item }) => <Category category={item} navigation={navigation} />}
                            showsHorizontalScrollIndicator={false}
                        />
                    )
            }
        </View>
    )
}

const styles = StyleSheet.create({})

export default CategoryScreen