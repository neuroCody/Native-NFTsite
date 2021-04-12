import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View } from "react-native"

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style='auto' />
      <Text>Hello World</Text>
      <Text>Hey</Text>
      <Text>WHats up</Text>
      <Text>this is the first Project</Text>
      <Text>this is the first Project</Text>
      <Text>this is the first Project</Text>
      <Text>this is the first Project</Text>
      <Text>this is the first Project</Text>
      <Text>this is the first Project</Text>
      <Text>Closing the loop</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
