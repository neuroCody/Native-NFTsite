import React, { Component } from "react"
import { Text, View, StyleSheet, TextInput } from "react-native"
import { Card, Input, Button } from "react-native-elements"
import { ScrollView } from "react-native-gesture-handler"

class SignUp extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.viewBackground}>
          <Text style={styles.loginHeader}>Sign Up</Text>
          <Text style={styles.inputHeader}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder='John Doe'
            placeholderTextColor={"#D7EB5A"}
          />
          <Text style={styles.inputHeader}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder='example@example.com'
            placeholderTextColor={"#D7EB5A"}
          />
          <Text style={styles.inputHeader}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder='example123'
            placeholderTextColor={"#D7EB5A"}
          />
          <Text style={styles.inputHeader}>Password</Text>
          <TextInput
            style={styles.input}
            selectionColor={"red"}
            placeholder='password'
            placeholderTextColor={"#D7EB5A"}
          />
          <Button
            title={"Sign Up"}
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
          <Text style={styles.shiftLeft}>
            <Text style={styles.forgotPassword}>Already have an account?</Text>
            <Text style={styles.signUp}>Login</Text>
          </Text>
        </View>
      </ScrollView>
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
    backgroundColor: "#090909",
    borderBottomColor: "#232323",
    borderRadius: 5,
    padding: 12,
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
    flexDirection: "row-reverse",
    marginBottom: 20,
  },
  shiftLeft: {
    marginLeft: 20,
  },
})

export default SignUp
