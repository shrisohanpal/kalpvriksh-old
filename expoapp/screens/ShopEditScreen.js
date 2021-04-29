import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { View, Text, ActivityIndicator, Button, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { baseUrl } from '../urls'
import Message from '../components/Message'
import Card from '../components/Card'
import { listShopDetails, updateShop } from '../actions/shopActions'
import { SHOP_UPDATE_RESET } from '../constants/shopConstants'

const ShopEditScreen = ({ navigation, route }) => {

    const shopId = route.params.id

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')
    const [address, setAddress] = useState('')
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [aadharNumber, setAadharNumber] = useState('')
    const [panNumber, setPanNumber] = useState('')
    const [gstNumber, setGstNumber] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')
    const [uploading, setUploading] = useState(false)

    const dispatch = useDispatch()

    const shopDetails = useSelector((state) => state.shopDetails)
    const { loading, error, shop } = shopDetails

    const shopUpdate = useSelector((state) => state.shopUpdate)
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = shopUpdate

    const categoryList = useSelector((state) => state.categoryList)
    const { loading: categoryLoading, error: categoryError, categorys } = categoryList

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: SHOP_UPDATE_RESET })
            navigation.goBack()
        } else {
            if (shop || !shop._id || shop._id !== shopId) {
                dispatch(listShopDetails(shopId))
            } else {
                setName(shop.name)
                setImage(shop.image)
                setCategory(shop.category && categorys.find(c => c._id === shop.category).name)
                setAddress(shop.address)
                setLatitude(shop.latitude)
                setLongitude(shop.longitude)
                setAadharNumber(shop.aadharNumber)
                setPanNumber(shop.panNumber)
                setGstNumber(shop.gstNumber)
                setPhone(shop.phone)
                setEmail(shop.email)
                setDescription(shop.description)
            }
        }
    }, [dispatch, navigation, shopId, shop, successUpdate])

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }

            const { data } = await axios.post(`${baseUrl}/api/upload`, formData, config)

            setImage(data)
            setUploading(false)
        } catch (error) {
            console.error(error)
            setUploading(false)
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(
            updateShop({
                _id: shopId,
                name,
                image,
                category: categorys && categorys.find(c => c.name === category) && categorys.find(c => c.name === category)._id,
                address,
                latitude,
                longitude,
                aadharNumber,
                panNumber,
                gstNumber,
                phone,
                email,
                description,
            })
        )
    }

    const handleLocation = () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
            alert(`Location Added Successfully! \n Latitide: ${position.coords.latitude} \n Longitude: ${position.coords.longitude}`)
        });
    }

    return (
        <View>
            <Text>This is Shop Edit Screen</Text>
        </View>
    )
}

export default ShopEditScreen