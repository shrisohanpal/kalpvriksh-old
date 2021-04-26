import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Button, ActivityIndicator, ScrollView, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { listMyOrders } from '../actions/orderActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'
import { logout } from '../actions/userActions'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const ProfileScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  const orderListMy = useSelector((state) => state.orderListMy)
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy

  useEffect(() => {
    if (!user || !user.name || success) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET })
      dispatch(getUserDetails('profile'))
      dispatch(listMyOrders())
    } else {
      setName(user.name)
      setEmail(user.email)
    }
  }, [dispatch, userInfo, user, success])

  const submitHandler = () => {
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }))
    }
  }

  return (
    <View style={styles.profile}>
      {message && <Message data={message} />}
      {success && <Message data="Profile Updated" />}

      {loading ?
        <ActivityIndicator size="large" color={Colors.primary} />
        : error ?
          <Message data={error} />
          : (
            <ScrollView>
              <View style={styles.form}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={setName}
                  value={name}
                />
                <Text style={styles.label}>Email Address</Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={setEmail}
                  value={email}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={setPassword}
                />
                <Text style={styles.label}>Conform Password</Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={setConfirmPassword}
                />
                <View style={{ marginVertical: 10 }}>
                  <Button
                    title="Update"
                    onPress={submitHandler}
                  />
                </View>
                <Button
                  title="Logout"
                  color='red'
                  onPress={() => dispatch(logout())}
                />
              </View>
            </ScrollView>
          )
      }
    </View>
  )

  /*
                  <Button type='submit' variant='primary'>
                    Update
            </Button>
                </Form>
              )}
        </Col>
        <Col md={9}>
          <Row>
            <Col xs={8}>
              <h2>My Orders</h2>
            </Col>
            <Col xs={4}>
              <Button variant='danger' onClick={>Logout</Button>
            </Col>
          </Row>
          {loadingOrders ? (
            <CircularProgress />
          ) : errorOrders ? (
            <Message variant='danger'>{errorOrders}</Message>
          ) : (
                <Table striped bordered hover responsive className='table-sm'>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>DATE</th>
                      <th>TOTAL</th>
                      <th>PAID</th>
                      <th>DELIVERED</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order._id}>
                        <td>{order._id}</td>
                        <td>{order.createdAt.substring(0, 10)}</td>
                        <td>{order.totalPrice}</td>
                        <td>
                          {order.isPaid ? (
                            order.paidAt.substring(0, 10)
                          ) : (
                              <i className='fas fa-times' style={{ color: 'red' }}></i>
                            )}
                        </td>
                        <td>
                          {order.isDelivered ? (
                            order.deliveredAt.substring(0, 10)
                          ) : (
                              <i className='fas fa-times' style={{ color: 'red' }}></i>
                            )}
                        </td>
                        <td>
                          <LinkContainer to={`/order/${order._id}`}>
                            <Button className='btn-sm' variant='light'>
                              Details
                      </Button>
                          </LinkContainer>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
        </Col>
      </Row>
    </Container>
  )*/
}

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    padding: 10
  },
  form: {
    margin: 20
  },
  label: {
    fontSize: 18,
    marginVertical: 5
  },
  textInput: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2
  }
})

export default ProfileScreen
