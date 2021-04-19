import React, { Component } from "react"
import { Text, View, StyleSheet,  } from "react-native"
import { Card, Input, Button } from "react-native-elements"
import { ScrollView } from "react-native-gesture-handler"

//need to find way to style button, input typing, and nested text

class Login extends Component {
  render() {
    return (
      <View style={styles.viewBackground}>
        <Text style={styles.loginHeader}>Login</Text>
        <Text style={styles.inputHeader}>Email</Text>
        <Input
          style={styles.input}
          placeholder='example@example.com'
          placeholderTextColor={"#D7EB5A"}
        />
        <Text style={styles.inputHeader}>
          <Text>Password</Text>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </Text>
        <Input
          style={styles.input}
          placeholder='password'
          placeholderTextColor={"#D7EB5A"}
        />
        <Button title={"Sign In"} titleStyle={{color: "#232323"}} buttonStyle={{ backgroundColor: "#D7EB5A"}}/>
        <Text style={styles.shiftLeft}>
          <Text style={styles.forgotPassword}>Don't have an account?</Text>
          <Text style={styles.signUp}>Sign Up</Text>
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewBackground: {
    flex: 1,
    backgroundColor: "#232323",
  },
  loginHeader: {
    fontFamily: "KoHo-bold",
    fontSize: 35,
    color: "#D7EB5A",
    marginLeft: 30,
    marginBottom: 20,
  },
  inputHeader: {
    fontFamily: "asap-regular",
    fontSize: 20,
    color: "#D7EB5A",
    marginLeft: 30,
    marginBottom: 20,
  },
  input: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#000000",
    borderBottomColor: '#232323',
    borderRadius: 5,
    padding: 8,
  },
  forgotPassword: {
    fontFamily: "asap-regular",
    fontSize: 15,
    color: "#78797B",
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  signUp: {
    flex: 1,
    fontFamily: "asap-regular",
    fontSize: 15,
    color: "#8B51F5",
    flexDirection: 'row-reverse',
    marginBottom: 20,
  },
  shiftLeft: {
    marginLeft: 20,
  },
})
export default Login
