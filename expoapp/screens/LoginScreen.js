import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ScrollView, View, TextInput, CheckBox, Button, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native'
import Message from '../components/Message'
import { login } from '../actions/userActions'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const userForgotPassword = useSelector((state) => state.userForgotPassword)
  const { success } = userForgotPassword

  // const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      //   navigation.navigate('Profile')
    }
  })

  const submitHandler = () => {
    //  e.preventDefault()
    //dispatch(login(email, password))
    dispatch(login('admin@example.com', '123456'))
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {success && <Message>We have sent a new Password on Your Email Address.</Message>}
        {error && <Message data={error} />}
        {loading && <ActivityIndicator />}
        <Text style={styles.text}>Email Address</Text>
        <TextInput style={styles.textInput}
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Text style={styles.text}>Password</Text>
        <TextInput style={styles.textInput}
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          textContentType="password"
        />

        <View style={styles.checkBoxContainer}>
          <CheckBox value={showPassword}
            onValueChange={setShowPassword}
            style={styles.checkbox}
          />
          <Text style={{ fontSize: 18 }}>Show Password</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button style={styles.button}
            title="LogIn"
            onPress={() => submitHandler()}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button style={styles.button}
            title="Register"
            onPress={() => { navigation.navigate('Register') }}
          />
        </View>

        <TouchableOpacity style={{ margin: 10 }} onPress={() => { navigation.navigate('ForgotPassword') }}>
          <Text style={{ fontSize: 15 }}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20
  },
  text: {
    fontSize: 20
  },
  textInput: {
    fontSize: 18,
    borderWidth: 1,
    backgroundColor: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5
  },
  checkBoxContainer: {
    flexDirection: 'row'
  },
  checkbox: {
    color: 'blue'
  },
  buttonContainer: {
    margin: 10
  }
})

export default LoginScreen