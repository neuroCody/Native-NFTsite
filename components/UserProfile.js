import React, { useState, useLayoutEffect } from "react"
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native"
import FavoritesCarousel from "./FavoritesCarousel"
import { Icon } from "react-native-elements"
import { createStackNavigator } from '@react-navigation/stack';
import * as Animatable from "react-native-animatable"
import { connect } from "react-redux"

function mapStateToProps(state) {
  //console.log(state)
  return { image: state.image }
}



function UserProfileScreen(props) {
  const [shouldShow, setShouldShow] = useState(false)

  // useLayoutEffect(() => {
  //   props.navigation.setOptions({
  //     headerRight: () => (
  //       <Icon
  //         name='search'
  //         type='font-awesome'
  //         iconStyle={{
  //           color: "#D7EB5A",
  //           margin: 20,
  //           marginBottom: 35,
  //         }}
  //         size={32}
  //         onPress={() => setShouldShow(!shouldShow)}
  //       />
  //     ),
  //   })
  // })

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#232323" }}>
      {shouldShow ? (
        <Animatable.View
          animation='slideInDown'
          duration={900}
          style={{
            height: 40,
            backgroundColor: "#232323",
            justifyContent: "center",
          }}
        >
          <TextInput
            placeholder='Search'
            style={styles.input}
            // onChangeText={onChangeText}
            // value={text}
          />
        </Animatable.View>
      ) : null}
      <ScrollView style={styles.container}>
        <View style={styles.headerView}>
          <View style={styles.coverImage}>
              <Image
                source={require("./images/galaxyraccoon.jpg")}
                style={styles.coverImage}
              />
            <View style={styles.editBox}>
              <Text style={styles.editText}>Edit Profile</Text>
            </View>
          </View>
          
          <View style={styles.profileImage}>
            <Image style={styles.profileImage} source={require("./images/elon_and_doge.jpg") } />
          </View>
          <View style={styles.location}>
            <Icon
              name='map-marker'
              type='font-awesome'
              iconStyle={{
                color: "#F93737",
                marginRight: 6,
              }}
              size={15}
            />
            <Text style={{ color: "#EBEBEB" }}>Location</Text>
          </View>

          <Text style={styles.username}>Elon Doge</Text>
          <View style={styles.bioView}>
            <Text style={styles.bioText}>
            What is Dogecoin? It's the future of currency. It's an unstoppable financial vehicle that's going to take over the world.
            </Text>
          </View>
        </View>
        {/**FAVORITES */}
        <View style={styles.favoritesView}>
          <Text style={styles.favoritesHeader}>Favorites</Text>
          {/* <View style={styles.favoritesBox}> */}
          <FavoritesCarousel/>
          {/* </View> */}
        </View>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.btnText}>Account Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.btnText}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.btnText}>Messages</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

const Stack = createStackNavigator()

export default function UserProfile({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Visualux'
        component={UserProfileScreen}
        options={{
          Headertitle: "Visualux",
          headerStyle: {
            backgroundColor: "#232323",
          },
          headerTitleStyle: {
            fontFamily: "satisfy-regular",
            color: "#F2F2F2",
            fontSize: 30,
            marginLeft: "30%",
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
  container: {
    flex: 1,
    backgroundColor: "#232323",
  },
  headerView: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    height: "10%",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    borderColor: "black",
    borderWidth: 1,
  },
  editBox: {
    width: "20%",
    height: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    //borderColor: "black",
    //borderWidth: 1,
    margin: 10,
  },
  editText: {
    color: "#D7EB5A",
  },
  coverImage: {
    //backgroundColor: "red",
    width: "100%",
    height: 145,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 100,
    //backgroundColor: "blue",
    alignSelf: "center",
    marginBottom: 5,
    marginTop:2
  },
  location: {
    flexDirection: "row",
    alignSelf: "center",
    color: "#929292",
    fontFamily: "asap-regular",
    fontSize: 15,
  },
  username: {
    alignSelf: "center",
    color: "#EBEBEB",
    fontFamily: "KoHo-bold",
    fontSize:20,
  },
  bioView: {
    flex:1,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: "15%",
    marginRight: "10%",
  },
  bioText: {
    color: "#EBEBEB",
  },
  favoritesView: {
    flex: 1,
    borderColor: "black",
    borderWidth: 1,
  },
  favoritesBox: {
    alignItems: "center",
    height:200,
    width: "100%",
    backgroundColor: "#48494B",
  },
  favoritesHeader: {
    fontFamily: "KoHo-regular",
    fontSize: 24,
    color: "#EBEBEB",
    marginLeft: 10,
  },
  buttons: {
    backgroundColor: "#232323",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    borderRightWidth:0,
    borderLeftWidth: 0,
    height: 50,
  },
  btnText: {
    fontFamily: "KoHo-regular",
    fontSize: 20,
    color: "#EBEBEB",
    marginLeft: 10,
  },
  input: {
    height: 34,
    borderColor: "#D7EB5A",
    borderWidth: 1,
    borderRadius: 5,
    color: "#D7EB5A",
    backgroundColor: "#232323",
    paddingLeft: 10,
    margin: 3,
    fontFamily: "KoHo-regular",
  },
})

connect(mapStateToProps)(UserProfileScreen)