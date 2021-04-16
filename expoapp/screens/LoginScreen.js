import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, TextInput, CheckBox, Button, Text, StyleSheet} from 'react-native'
import Message from '../components/Message'
import { login } from '../actions/userActions'

const LoginScreen = ({ match, location, history }) =>
{
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const userForgotPassword = useSelector((state) => state.userForgotPassword)
  const { success } = userForgotPassword

 // const redirect = location.search ? location.search.split('=')[1] : '/'

  const submitHandler = (e) =>
  {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email Address</Text>
      <TextInput style={styles.textInput}
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      textContentType="password" />
      
      <Text style={styles.text}>Password</Text>
      <TextInput style={styles.textInput}
        placeholder="Enter Password" />
      
      <View style={styles.checkBoxContainer}>
        <CheckBox value={showPassword}
          onValueChange={setShowPassword}
          style={styles.checkbox}
        />
        <Text>Show Password</Text>
      </View>

      <View style={styles.buttonContainer}>
      <Button style={styles.button}
        title="LogIn" />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button style={styles.button}
          title="Register" />
      </View>

    </View>
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
   fontSize:25
  },
  textInput: {
    fontSize: 20,
    borderWidth: 1,
    backgroundColor: 1,
    padding: 10,
    marginVertical:10,
    borderRadius:5
  },
  checkBoxContainer: {
    flexDirection: 'row'
  },
  checkbox: {
    color: 'blue'
  },
  buttonContainer: {
    margin:20
  }
})

export default LoginScreen