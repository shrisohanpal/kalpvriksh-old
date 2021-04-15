import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, SafeAreaView, Text, Button, ScrollView, Image, Dimensions, FlatList, StyleSheet } from 'react-native'

//import Product from '../components/Product'
import Shop from '../components/Shop'
import Product from '../components/Product'
import Message from '../components/Message'
import { listProducts } from '../actions/productActions'
import { listShops } from '../actions/shopActions'
//import OwlCarousel from 'react-owl-carousel';

const HomeScreen = () => {

    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading: loadingProducts, error: errorProducts, products } = productList

    const shopList = useSelector(state => state.shopList)
    const { loading: loadingShops, error: errorShops, shops } = shopList

    useEffect(() => {
        dispatch(listProducts())
        dispatch(listShops)
    }, [dispatch])

    return (
        <ScrollView>
            <View style={{ width: '100%' }}>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Image style={styles.scrollImage} source={require('../assets/banners/a.jpg')} />
                    <Image style={styles.scrollImage} source={require('../assets/banners/b.jpg')} />
                    <Image style={styles.scrollImage} source={require('../assets/banners/c.jpg')} />
                </ScrollView>

                <Text style={styles.text}>Featured Shops</Text>
                {loadingShops ? (<Text>Loading...</Text>)
                    : errorShops
                        ? (<Message data={errorShops} />)
                        : (
                            <FlatList
                                keyExtractor={(item, index) => item._id}
                                data={shops}
                                renderItem={Shop}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                            />
                        )
                }

                <Image source={require('../assets/banners/ba.jpg')} style={styles.banner} fluid />
                <Image source={require('../assets/banners/bb.jpg')} style={styles.banner} fluid />
                <Image source={require('../assets/banners/bc.jpg')} style={styles.banner} fluid />

                <Text style={styles.text}>Featured Products</Text>
                {loadingProducts ? (<Text>Loading...</Text>)
                    : errorProducts
                        ? (<Message data={errorProducts} />)
                        : (
                            <FlatList
                                keyExtractor={(item, index) => item._id}
                                data={products}
                                renderItem={Product}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                            />
                        )
                }

                <Image source={require('../assets/banners/cc.jpg')} style={styles.footerBanner} fluid />

            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    scrollImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 400 / 1080,
    },
    text: {
        margin: 20,
        fontSize: 25
    },
    banner: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 704 / 1312,
    },
    footerBanner: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 280 / 1500,
    },
})

export default HomeScreen
