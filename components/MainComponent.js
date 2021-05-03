import React, { Component } from "react"
import Home from "./HomeComponent"
import Featured from "./FeaturedComponent"
import Gallery from "./GalleryComponent"
import Faq from "./FaqComponent"
import Sell from "./SellComponent"
import Login from "./LoginComponent"
import SignUp from "./SignUpComponent"
import SearchTest from "./SearchTestComponent"
import { View, Platform, StyleSheet, Text } from "react-native"
import { Icon } from "react-native-elements"
import { createStackNavigator } from "react-navigation-stack"
import { createDrawerNavigator } from "react-navigation-drawer"
import { createAppContainer } from "react-navigation"
import CustomDrawerContentComponent from "./DrawerStyleComponent"

const HomeNav = Home

const GalleryNav = Gallery

const FeaturedNav = Featured

const FaqNav = Faq

const SellNav = Sell

const LoginNav = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: "Visualux",
      headerStyle: {
        backgroundColor: "#232323",
        paddingBottom: 10,
        marginTop: 0,
      },
      headerTitleStyle: {
        fontFamily: "satisfy-regular",
        color: "#F2F2F2",
        fontSize: 55,
        marginLeft: "20%",
      },
      headerLeft: (
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
    }),
  }
)

const SignUpNav = createStackNavigator(
  {
    SignUp: {
      screen: SignUp,
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: "Visualux",
      headerStyle: {
        backgroundColor: "#232323",
        paddingBottom: 10,
        marginTop: 0,
      },
      headerTitleStyle: {
        fontFamily: "satisfy-regular",
        color: "#F2F2F2",
        fontSize: 30,
        fontSize: 55,
        marginLeft: "20%",
      },
      headerLeft: (
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
    }),
  }
)

const Test = SearchTest

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNav,
    },

    Gallery: {
      screen: GalleryNav,
    },
    Featured: {
      screen: FeaturedNav,
    },
    Faq: {
      screen: FaqNav,
    },
    Sell: {
      screen: SellNav,
    },
    Login: {
      screen: LoginNav,
    },
    SignUp: {
      screen: SignUpNav,
    },
  },

  {
    drawerBackgroundColor: "#232323",
    contentComponent: CustomDrawerContentComponent,
  }
)

const AppNavigator = createAppContainer(MainNavigator)

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
        <AppNavigator
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
