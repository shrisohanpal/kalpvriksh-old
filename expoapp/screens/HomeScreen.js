import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, SafeAreaView, Text, Button, ScrollView, Image, FlatList, StyleSheet, } from 'react-native'
import ImageSlider from 'react-native-image-slider'
//import Carousel from 'react-native-snap-carousel'
//import Product from '../components/Product'
import Shop from '../components/Shop'
import Message from '../components/Message'
import { listProducts } from '../actions/productActions'
import { listShops } from '../actions/shopActions'
//import OwlCarousel from 'react-owl-carousel';

const HomeScreen = () =>
{
    const images = [
        'https://placeimg.com/640/640/nature',
        'https://placeimg.com/640/640/people',
        'https://placeimg.com/640/640/animals',
        'https://placeimg.com/640/640/beer',
    ]

    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading: loadingProducts, error: errorProducts, products } = productList

    const shopList = useSelector(state => state.shopList)
    const { loading: loadingShops, error: errorShops, shops } = shopList

    useEffect(() =>
    {
        dispatch(listProducts())
        dispatch(listShops)
    }, [dispatch])
    return (
        <SafeAreaView >
            <ImageSlider
                loopBothSides
                autoPlayWithInterval={3000}
                images={images}
                customSlide={({ index, item, style, width }) => (
                    <View key={index} style={[style]}>
                        <Image source={{ uri: item }} style={{ height: 100, width: '100%' }} />
                    </View>
                )}
            />
            <Text>Featured Shops</Text>
            { loadingShops ? (<Text>Loading...</Text>)
                : errorShops
                    ? (<Message data={errorShops} />)
                    : (
                        <FlatList
                            //   keyExtractor={(item, index) => item._id}
                            data={shops}
                            renderItem={Shop}
                            horizontal={true}
                        />
                    )
            }

            <Image source={require('../assets/banners/a.jpg')} style={{ width: 100, height: 100 }} fluid />

            <Text>Featured Products</Text>
            {/*loadingProducts ? (<CircularProgress />)
                : errorProducts
                    ? (<Message variant='danger'>{errorProducts}</Message>)
                    : (<OwlCarousel items={window.innerWidth > 780 ? 4 : 2}
                        className="owl-theme"
                        loop
                        nav
                        margin={8} autoplay={true} autoplayTimeout={2000}>
                        {products.map((product) => (
                            <div key={product._id}>
                                <Product product={product} />
                            </div>

                        ))}
                    </OwlCarousel>
                    )
           */ }

            <Image source={require('../assets/banners/a.jpg')} style={{ width: 100, height: 100 }} fluid />

        </SafeAreaView>
    )
}

export default HomeScreen
