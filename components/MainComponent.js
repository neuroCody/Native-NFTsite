import React, { Component } from "react"
import Home from "./HomeComponent"
import Gallery from "./GalleryComponent"
import Faq from "./FaqComponent"
import Sell from "./SellComponent"
import Login from "./LoginComponent"
import SignUp from "./SignUpComponent"
import UserProfile from './UserProfile'
import { View, Platform, StyleSheet, Text } from "react-native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"
import CustomDrawerContentComponent from "./DrawerStyleComponent"

const Drawer = createDrawerNavigator()

function MainNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContentComponent {...props} />}
      >
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='Gallery' component={Gallery} />
        <Drawer.Screen name='Faq' component={Faq} />
        <Drawer.Screen name='Sell' component={Sell} />
        <Drawer.Screen name='Login' component={Login} />
        <Drawer.Screen name='SignUp' component={SignUp} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,

          paddingTop:
            Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,
        }}
      >
        <MainNavigator
          style={{
            backgroundColor: "#272727",
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerTitle: {
    color: "#F2F2F2",
    fontSize: 37,
    fontFamily: "satisfy-regular",
  },
})

export default Main
