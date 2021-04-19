import React, { Component } from "react"
import { Text, View, StyleSheet } from "react-native"
import { Card } from "react-native-elements"
import { ScrollView } from "react-native-gesture-handler"

class Login extends Component {
  render() {
    return (
      <View style={styles.viewBackground}>
        <Input />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewBackground: {
    flex: 1,
    backgroundColor: "#232323",
  },
})
export default Login
