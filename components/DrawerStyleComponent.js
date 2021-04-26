import React, { Component } from "react"
import { NavigationActions } from "react-navigation"
import { ScrollView, Text, View, StyleSheet } from "react-native"
import SafeAreaView from "react-native-safe-area-view";
import { Icon } from "react-native-elements";




class CustomDrawerContentComponent extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    })
    this.props.navigation.dispatch(navigateAction)
  }
  render() {
    return (
      <ScrollView>
        <SafeAreaView
          style={styles.container}
          forceInset={{ top: "always", horizontal: "never" }}
        >
          <View style={styles.drawerHeader}>
            <View style={{ flex: 2 }}>
              <Text style={styles.drawerHeaderText}>Visualux</Text>
            </View>
            <View >
            <Icon
                name='chevron-left'
                type='font-awesome'
                iconStyle={{
                  color: "#8B51F5",
                  margin: 10
                }}
                size={20}
                onPress={() => this.props.navigation.closeDrawer()}
              />
            </View>
          </View>
          {/* Home Navigator */}
          <View style={styles.drawerItem}>
            <Text
              style={styles.drawerItemText}
              onPress={(() => this, this.navigateToScreen("Home"))}
            >
              Home
            </Text>
          </View>
          {/* Gallery Navigator */}
          <View style={styles.drawerItem}>
            <Text
              style={styles.drawerItemText}
              onPress={(() => this, this.navigateToScreen("Gallery"))}
            >
              Gallery
            </Text>
          </View>
           {/* Featured Navigator */}
          <View style={styles.drawerItem}>
            <Text
              style={styles.drawerItemText}
              onPress={(() => this, this.navigateToScreen("Featured"))}
            >
              Featured
            </Text>
          </View>
          {/* Faq Navigator */}
          <View style={styles.drawerItem}>
            <Text
              style={styles.drawerItemText}
              onPress={(() => this, this.navigateToScreen("Faq"))}
            >
              Faq
            </Text>
          </View>
          {/* Sell Navigator */}
          <View style={styles.sellItem} >
            <Text
              style={styles.sellItemText}
              onPress={(() => this, this.navigateToScreen("Sell"))}
            >
              Sell on Visualux
            </Text>
          </View>
          {/* Login Navigator */}
          <View style={styles.drawerItem}>
            <Text
              style={styles.drawerItemText}
              onPress={(() => this, this.navigateToScreen("Login"))}
            >
              Login
            </Text>
          </View>
          {/* Sign Up Navigator */}
          <View style={styles.drawerItem}>
            <Text
              style={[styles.drawerItemTextDark, styles.signUpBackground]}
              onPress={(() => this, this.navigateToScreen("SignUp"))}
            >
              Sign Up
            </Text>
          </View>

          <View style={styles.drawerItem}>
            <Text
              style={styles.drawerItemText}
              onPress={(() => this, this.navigateToScreen("Test"))}
            >
              Test
            </Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: "#232323",
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  drawerHeaderText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 30,
    fontFamily: "satisfy-regular",
    marginLeft: '15%'
  },
  stackIcon: {
    marginLeft: 10,
    color: "#fff",
    fontSize: 24,
  },
  drawerItem: {
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
  },
  drawerItemText: {
    color: "#D7EB5A",
    fontSize: 24,
    fontFamily: "asap-regular",
  },
  drawerItemTextDark: {
    color: "#232323",
    fontSize: 24,
    fontFamily: "asap-regular",
  },
  signUpBackground: {
    backgroundColor: "#D7EB5A",
    padding: 15,
    paddingRight: 70,
    paddingLeft: 70,
    borderRadius: 10,
  },
  sellItem: {
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
    borderBottomColor: '#78797B',
    borderBottomWidth: 1,
    borderTopColor: '#78797B',
    borderTopWidth: 1,
  },
  sellItemText: {
    color: "#D7EB5A",
    fontSize: 24,
    fontFamily: "asap-regular",
    paddingTop: 25,
    paddingBottom: 25
  },
})

export default CustomDrawerContentComponent
