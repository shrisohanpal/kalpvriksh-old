import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text, TextInput, Button, ActivityIndicator, Picker, CheckBox, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Card from '../components/Card'
import { listProductDetails, updateProduct, deleteProduct, listProducts } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET, PRODUCT_DELETE_RESET } from '../constants/productConstants'
import Colors from '../constants/Colors'


const ProductEditScreen = ({ route, navigation }) => {

    const productId = route.params.id

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [image2, setImage2] = useState('')
    const [image3, setImage3] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [countInStock, setCountInStock] = useState(0)
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [gst, setGst] = useState(0)
    const [finalPrice, setFinalPrice] = useState(0)
    const [returnable, setReturnable] = useState(false)
    const [refundable, setRefundable] = useState(false)
    const [exchange, setExchange] = useState(0)
    const [uploading, setUploading] = useState(false)

    const dispatch = useDispatch()

    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails

    const productUpdate = useSelector((state) => state.productUpdate)
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = productUpdate

    const productDelete = useSelector((state) => state.productDelete)
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = productDelete

    const categoryList = useSelector((state) => state.categoryList)
    const { loading: categoryLoading, error: categoryError, categorys } = categoryList

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: PRODUCT_UPDATE_RESET })
            dispatch(listProducts())
            navigation.goBack()
        } else {
            if (!product._id || product._id !== productId) {
                dispatch(listProductDetails(productId))
            } else {
                setName(product.name)
                setImage(product.images[0])
                setImage2(product.images[1])
                setImage3(product.images[2])
                setBrand(product.brand)
                setCategory(categorys.find(c => c._id === product.category) && categorys.find(c => c._id === product.category).name)
                setCountInStock(product.countInStock)
                setDescription(product.description)
                setPrice(product.price)
                setGst(product.gst)
                setFinalPrice(product.finalPrice)
                setReturnable(product.returnable)
                setRefundable(product.refundable)
                setExchange(product.exchange)
            }
        }
        if (successDelete) {
            dispatch({ type: PRODUCT_DELETE_RESET })
            dispatch(listProducts())
            navigation.navigate('ProductList')
        }
    }, [dispatch, navigation, productId, product, successUpdate, successDelete])

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

            const { data } = await axios.post('/api/upload', formData, config)

            setImage(data)
            setUploading(false)
        } catch (error) {
            console.error(error)
            setUploading(false)
        }
    }

    const uploadFileHandler2 = async (e) => {
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

            const { data } = await axios.post('/api/upload', formData, config)

            setImage2(data)
            setUploading(false)
        } catch (error) {
            console.error(error)
            setUploading(false)
        }
    }

    const uploadFileHandler3 = async (e) => {
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

            const { data } = await axios.post('/api/upload', formData, config)

            setImage3(data)
            setUploading(false)
        } catch (error) {
            console.error(error)
            setUploading(false)
        }
    }

    const submitHandler = () => {
        //  e.preventDefault()
        dispatch(
            updateProduct({
                _id: productId,
                name,
                images: image2 ? image3 ? [image, image2, image3] : [image, image2] : [image],
                brand,
                category: categorys && categorys.find(c => c.name === category) && categorys.find(c => c.name === category)._id,
                countInStock,
                description,
                price,
                gst,
                finalPrice,
                returnable,
                refundable,
                exchange
            })
        )
    }

    const deleteHandler = () => {
        dispatch(deleteProduct(productId))
    }

    return (
        <ScrollView>
            <Card style={styles.card}>
                {loadingDelete && <ActivityIndicator size="large" color={Colors.primary} />}
                {loadingUpdate && <ActivityIndicator size="large" color={Colors.primary} />}
                {errorUpdate && <Message data={errorUpdate} />}
                {loading ? (
                    <ActivityIndicator size="large" color={Colors.primary} />
                ) : error ? (
                    <Message data={error} />
                ) : (
                    <View>
                        <Text style={styles.title}>Edit Product</Text>
                        <Text style={styles.label}>Name</Text>
                        <TextInput style={styles.textInput}
                            placeholder="Enter name"
                            value={name}
                            onChangeText={setName}
                        />
                        <Text style={styles.label}>Image</Text>
                        <TextInput style={styles.textInput}
                            placeholder="Enter image url"
                            value={image}
                            onChangeText={setImage}
                        />

                        <Text style={styles.label}>Image2</Text>
                        <TextInput style={styles.textInput}
                            placeholder="Enter image url"
                            value={image2}
                            onChangeText={setImage2}
                        />

                        <Text style={styles.label}>Image3</Text>
                        <TextInput style={styles.textInput}
                            placeholder="Enter image url"
                            value={image3}
                            onChangeText={setImage3}
                        />

                        <Text style={styles.label}>Brand</Text>
                        <TextInput style={styles.textInput}
                            placeholder="Enter brand"
                            value={brand}
                            onChangeText={setBrand}
                        />

                        <Text style={styles.label}>Count In Stock</Text>
                        <TextInput style={styles.textInput}
                            placeholder="Enter Count In Stock"
                            value={countInStock}
                            keyboardType='numeric'
                            onChangeText={setCountInStock}
                        />

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.label}>Select Category</Text>
                            <Picker
                                selectedValue={category}
                                style={{ marginLeft: 10, width: 120 }}
                                onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}>
                                {!categoryLoading && !categoryError && (
                                    categorys.map((category) => (
                                        <Picker.Item key={category._id} label={category.name} value={category.name} />
                                    ))
                                )}
                            </Picker>
                        </View>

                        <Text style={styles.label}>Description</Text>
                        <TextInput style={styles.textInput}
                            placeholder="Enter Description"
                            value={description}
                            onChangeText={setDescription}
                        />

                        <Text style={styles.label}>Price</Text>
                        <TextInput style={styles.textInput}
                            placeholder="Enter price"
                            value={price}
                            keyboardType='numeric'
                            onChangeText={setPrice}
                        />

                        <Text style={styles.label}>GST</Text>
                        <TextInput style={styles.textInput}
                            placeholder="Enter GST"
                            value={gst}
                            keyboardType='numeric'
                            onChangeText={setGst}
                        />

                        <Text style={styles.label}>Final Price</Text>
                        <TextInput style={styles.textInput}
                            placeholder="Enter final price"
                            value={finalPrice}
                            keyboardType='numeric'
                            onChangeText={setFinalPrice}
                        />

                        <Text style={styles.label}>Exchange Validity in days ( 0 means no exchange)</Text>
                        <TextInput style={styles.textInput}
                            placeholder="Enter exchange validity"
                            value={exchange}
                            keyboardType='numeric'
                            onChangeText={setExchange}
                        />

                        <View style={styles.checkBoxContainer}>
                            <CheckBox value={returnable}
                                onValueChange={setReturnable}
                                style={styles.checkbox}
                            />
                            <Text style={{ fontSize: 18 }}>Returnable</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox value={refundable}
                                onValueChange={setRefundable}
                                style={styles.checkbox}
                            />
                            <Text style={{ fontSize: 18 }}>Refundable</Text>
                        </View>
                        {loadingDelete && <ActivityIndicator size="large" color={Colors.primary} />}
                        {loadingUpdate && <ActivityIndicator size="large" color={Colors.primary} />}
                        <View style={styles.buttonContainer} >
                            <View style={{ margin: 10 }}>
                                <Button
                                    title="Update"
                                    onPress={submitHandler}
                                />
                            </View>
                            <View style={{ margin: 10 }}>
                                <Button
                                    title="Delete"
                                    color="red"
                                    onPress={deleteHandler}
                                />
                            </View>
                        </View>
                    </View>
                )
                }
            </Card>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    card: {
        margin: 10,
        padding: 10
    },
    title: {
        fontSize: 25,
        margin: 10
    },
    label: {
        fontSize: 18,
        margin: 10
    },
    textInput: {
        fontSize: 15,
        borderWidth: 1,
        backgroundColor: 1,
        padding: 10,
        margin: 10,
        borderRadius: 5
    },
    buttonContainer: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    checkBoxContainer: {
        flexDirection: 'row'
    },
    checkbox: {
        color: 'blue'
    },
})


export default ProductEditScreen