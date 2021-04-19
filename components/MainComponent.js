import React, { Component } from "react"
import Home from "./HomeComponent"
import Featured from "./FeaturedComponent";
import Gallery from "./GalleryComponent";
import Faq from "./FaqComponent";
import Sell from "./SellComponent";
import Login from "./LoginComponent"
import SignUp from "./SignUpComponent"
import { View, Platform, StyleSheet } from "react-native"
import { Icon } from "react-native-elements"
import { createStackNavigator } from "react-navigation-stack"
import { createDrawerNavigator } from "react-navigation-drawer"
import { createAppContainer } from "react-navigation"
import CustomDrawerContentComponent from "./DrawerStyleComponent"

const HomeNav = createStackNavigator(
  {
    Home: { screen: Home },
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
        marginLeft: "33%",
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
      headerRight: (
        <Icon
          name='search'
          type='font-awesome'
          iconStyle={{
            color: "#D7EB5A",
            margin: 20,
            marginBottom: 35,
          }}
          size={32}
        />
      ),
    }),
  }
)

const GalleryNav = createStackNavigator(
  {
    Gallery: {
      screen: Gallery,
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: "Visualux",
      headerStyle: {
        backgroundColor: "#232323",
        paddingBottom: 10,
        marginTop: 0,
        // textAlign: 'center',
      },
      headerTitleStyle: {
        fontFamily: "satisfy-regular",
        color: "#F2F2F2",
        fontSize: 30,
        marginLeft: "33%",
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
      headerRight: (
        <Icon
          name='search'
          type='font-awesome'
          iconStyle={{
            color: "#D7EB5A",
            margin: 20,
            marginBottom: 35,
          }}
          size={32}
        />
      ),
    }),
  }
)

const FeaturedNav = createStackNavigator(
  {
    Featured: { screen: Featured },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: "Visualux",
      headerStyle: {
        backgroundColor: "#232323",
        paddingBottom: 10,
        marginTop: 0,
        // textAlign: 'center',
      },
      headerTitleStyle: {
        fontFamily: "satisfy-regular",
        color: "#F2F2F2",
        fontSize: 30,
        marginLeft: "33%",
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
      headerRight: (
        <Icon
          name='search'
          type='font-awesome'
          iconStyle={{
            color: "#D7EB5A",
            margin: 20,
            marginBottom: 35,
          }}
          size={32}
        />
      ),
    }),
  }
)

const FaqNav = createStackNavigator(
  {
    Faq: { screen: Faq },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: "Visualux",
      headerStyle: {
        backgroundColor: "#232323",
        paddingBottom: 10,
        marginTop: 0,
        // textAlign: 'center',
      },
      headerTitleStyle: {
        fontFamily: "satisfy-regular",
        color: "#F2F2F2",
        fontSize: 30,
        marginLeft: "33%",
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
      headerRight: (
        <Icon
          name='search'
          type='font-awesome'
          iconStyle={{
            color: "#D7EB5A",
            margin: 20,
            marginBottom: 35,
          }}
          size={32}
        />
      ),
    }),
  }
)

const SellNav = createStackNavigator(
  {
    Sell: { screen: Sell },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: "Visualux",
      headerStyle: {
        backgroundColor: "#232323",
        paddingBottom: 10,
        marginTop: 0,
        // textAlign: 'center',
      },
      headerTitleStyle: {
        fontFamily: "satisfy-regular",
        color: "#F2F2F2",
        fontSize: 30,
        marginLeft: "33%",
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
      headerRight: (
        <Icon
          name='search'
          type='font-awesome'
          iconStyle={{
            color: "#D7EB5A",
            margin: 20,
            marginBottom: 35,
          }}
          size={32}
        />
      ),
    }),
  }
)

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
        // textAlign: 'center',
      },
      headerTitleStyle: {
        fontFamily: "satisfy-regular",
        color: "#F2F2F2",
        fontSize: 30,
        marginLeft: "33%",
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
        // textAlign: 'center',
      },
      headerTitleStyle: {
        fontFamily: "satisfy-regular",
        color: "#F2F2F2",
        fontSize: 30,
        marginLeft: "33%",
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
      headerRight: (
        <Icon
          name='search'
          type='font-awesome'
          iconStyle={{
            color: "#D7EB5A",
            margin: 20,
            marginBottom: 35,
          }}
          size={32}
        />
      ),
    }),
  }
)

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
    FAQ: {
      screen: FaqNav,
    },
    Sell: {
      screen: SellNav
    },
    Login: {
      screen: LoginNav,
    },
    SignUp: {
      screen: SignUpNav,
    },
  },
  
  
  
  //     navigationOptions: {
  //         drawerLabel: 'Sell on Visualux'
  //     }
  // },
  //     navigationOptions: {
  //         drawerLabel: 'Sign Up'
  //     }
  // },
  {
    drawerBackgroundColor: "#232323",
    contentComponent: CustomDrawerContentComponent,
  }
)

const AppNavigator = createAppContainer(MainNavigator)

class Main extends Component {
  state = {
    searchBarFocused: true,
  }

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
