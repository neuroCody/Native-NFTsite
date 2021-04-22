import React, { Component } from "react"
import SignUp from "./SignUpComponent"
import { Text, View, StyleSheet, TextInput } from "react-native"
import { Card, Input, Button } from "react-native-elements"
import { ScrollView } from "react-native-gesture-handler"

//need to find way to style button, input typing, and nested text

class Login extends Component {
  render() {
    return (
      <View style={styles.viewBackground}>
        <Text style={styles.loginHeader}>Login</Text>
        <Text style={styles.inputHeader}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder='example@example.com'
          placeholderTextColor={"#D7EB5A"}
        />
        <Text style={styles.inputHeader}>
          <Text>Password</Text>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </Text>
        <TextInput
          style={styles.input}
          placeholder='password'
          placeholderTextColor={"#D7EB5A"}
        />
        <Button
          title={"Login"}
          titleStyle={{ color: "#232323", fontSize: 24 }}
          buttonStyle={{
            backgroundColor: "#D7EB5A",
            marginTop: 38,
            marginLeft: 25,
            marginRight: 25,
            padding: 18,
            borderRadius: 17,
          }}
        />
        <Text style={styles.forgotPassword}>
          <Text>Don't have an account?</Text>
          {/* <SignUpLink /> */}
        </Text>
      </View>
    )
  }
}

// function SignUpLink({ navigation }) {
//   return (
//     <View>
//       <Button title={"Sign Up"} onPress={() => navigation.navigate("SignUp")} />
//     </View>
//   )
// }

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
    marginTop: 40,
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
    marginBottom: 30,
    backgroundColor: "#000000",
    borderBottomColor: "#232323",
    borderRadius: 5,
    padding: 12,
  },
  forgotPassword: {
    fontFamily: "asap-regular",
    fontSize: 15,
    color: "#78797B",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
  },
  signUp: {
    flex: 1,
    fontFamily: "asap-regular",
    fontSize: 15,
    color: "#8B51F5",
    flexDirection: "row-reverse",
    marginBottom: 20,
    marginLeft: 20,
  },
})
export default Login
