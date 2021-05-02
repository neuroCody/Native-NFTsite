import React, { Component, UseState } from "react"
import { NavigationActions } from "react-navigation"
import { Text, View, StyleSheet, TextInput } from "react-native"
import { Button } from "react-native-elements"
import { ScrollView } from "react-native-gesture-handler"

//need to find way to style button, input typing, and nested text

class Login extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    })
    this.props.navigation.dispatch(navigateAction)
  }
  render() {
    return (
      <View style={styles.viewBackground}>
        <Text style={styles.loginHeader}>Login</Text>

        <Text style={styles.inputHeaderEmail}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder='example@example.com'
          placeholderTextColor={"#D7EB5A"}
        />

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.inputHeaderPassword}>Password</Text>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </View>
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

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.noAccount}>Don't have an account?</Text>
          <Text
            style={styles.signUp}
            onPress={(() => this, this.navigateToScreen("SignUp"))}
          >
            Sign Up
          </Text>
        </View>
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
  inputHeaderEmail: {
    fontFamily: "asap-regular",
    fontSize: 20,
    color: "#D7EB5A",
    marginLeft: 30,
    marginBottom: 20,
  },
  inputHeaderPassword: {
    marginLeft: 30,
    fontFamily: "asap-regular",
    fontSize: 20,
    color: "#D7EB5A",
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
    color: "#D7EB5A",
  },
  forgotPassword: {
    marginLeft: 140,
    fontFamily: "asap-regular",
    fontSize: 15,
    color: "#78797B",
  },
  noAccount: {
    marginLeft: 30,
    fontFamily: "asap-regular",
    fontSize: 15,
    color: "#78797B",
    marginTop: 30,
  },
  signUp: {
    marginLeft: 120,
    fontFamily: "asap-regular",
    fontSize: 15,
    color: "#8B51F5",
    marginTop: 30,
  },
})
export default Login
