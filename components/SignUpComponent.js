import React, { Component } from "react"
import { NavigationActions } from "react-navigation"
import { Text, View, StyleSheet, TextInput } from "react-native"
import { Button, Icon } from "react-native-elements"
import { ScrollView } from "react-native-gesture-handler"
import { createStackNavigator } from "@react-navigation/stack"

function SignUpScreen({navigation}) {

  return(
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
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.yesAccount}>Already have an account?</Text>
        <Text
          style={styles.login}
          onPress={(() => navigation.navigate("Login"))}
        >
          Login
        </Text>
      </View>
    </View>
  </ScrollView>
  )
}

const Stack = createStackNavigator();

function SignUp({navigation}) {

    return (
      <Stack.Navigator>
        <Stack.Screen
          name='Visualux'
          component={SignUpScreen}
          options={{
            Headertitle: "Visualux",
            headerStyle: {
              backgroundColor: "#232323",
            },
            headerTitleStyle: {
              fontFamily: "satisfy-regular",
              color: "#F2F2F2",
              fontSize: 30,
              marginLeft: "33%",
            },
            headerLeft: () => (
              <Icon
                name='bars'
                type='font-awesome'
                iconStyle={{
                  color: "#8B51F5",
                  margin: 15,
                }}
                size={35}
                onPress={() => navigation.toggleDrawer()}
              />
            ),
          }}
        />
      </Stack.Navigator>
    )
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
    color: "#D7EB5A",
  },
  forgotPassword: {
    fontFamily: "asap-regular",
    fontSize: 15,
    color: "#78797B",
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  yesAccount: {
    marginLeft: 30,
    fontFamily: "asap-regular",
    fontSize: 15,
    color: "#78797B",
    marginTop: 30,
    marginBottom: 50,
  },
  login: {
    marginLeft: 120,
    fontFamily: "asap-regular",
    fontSize: 15,
    color: "#8B51F5",
    marginTop: 30,
    marginBottom: 50,
  },
})

export default SignUp
