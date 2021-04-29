import React, { Component, useState, useLayoutEffect } from "react"
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
} from "react-native"
import { Icon, Card } from "react-native-elements"
import { ScrollView } from "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { IMAGES } from "../arrays/images"
import * as Animatable from "react-native-animatable"

function GalleryScreen({ navigation }) {
  const [shouldShow, setShouldShow] = useState(false)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          name='search'
          type='font-awesome'
          iconStyle={{
            color: "#D7EB5A",
            margin: 20,
            marginBottom: 35,
          }}
          size={32}
          onPress={() => setShouldShow(!shouldShow)}
        />
      ),
    })
  })

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#232323" }}>
      {shouldShow ? (
        <Animatable.View
          animation='slideInRight' //slide in ffrom top preferrred
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
      <GalleryNav />
    </SafeAreaView>
  )
}

const Stack = createStackNavigator()

function Gallery({ navigation }) {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name='Visualux'
          component={GalleryScreen}
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
    </NavigationContainer>
  )
}

const Tab = createMaterialTopTabNavigator()

class GalleryNav extends Component {
  render() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          indicatorStyle: {
            width: 0,
            height: 0,
            elevation: 0,
          },
          activeTintColor: "#D7EB5A",
          inactiveTintColor: "#F2F2F2",
          style: {
            backgroundColor: "#232323",
          },
        }}
      >
        <Tab.Screen name='Most Viewed' component={MostViewed} />
        <Tab.Screen name='Newest' component={Newest} />
        <Tab.Screen name='Price: low to high' component={LowToHigh} />
        <Tab.Screen name='Price: high to low' component={HighToLow} />
      </Tab.Navigator>
    )
  }
}

function MostViewed() {
  return (
    <View style={{ flex: 1, backgroundColor: "#232323" }}>
      <ScrollView style={{ height: 600 }}>
        <View>
          <Card containerStyle={styles.cardContainer}>
            <Card.Image
              source={require("./images/prism-cloud.jpg")}
              style={styles.cardImg}
            ></Card.Image>
            <Text style={styles.cardText}>Home Page</Text>
          </Card>
          <Card containerStyle={styles.card}>
            <Card.Image
              source={require("./images/pastel_street.jpg")}
              style={styles.cardImg}
            ></Card.Image>
            <Text style={styles.cardText}>Home Page</Text>
          </Card>
        </View>
      </ScrollView>
    </View>
  )
}

function Newest() {
  return (
    <ScrollView>
      <View>
        <Card containerStyle={styles.cardContainer}>
          <Card.Image
            source={require("./images/prism-cloud.jpg")}
            style={styles.cardImg}
          ></Card.Image>
          <Text style={styles.cardText}>Home Page</Text>
        </Card>
      </View>
    </ScrollView>
  )
}

////need to add .sort() to sort prices in map function
function LowToHigh() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#232323" }}>
      <View>
        {IMAGES.map((i) => {
          return (
            <Card key={i.id} containerStyle={styles.cardContainer}>
              <Card.Image style={styles.cardImg} source={i.image}></Card.Image>
              <Text style={styles.cardText}>{i.title}</Text>
            </Card>
          )
        })}
      </View>
    </ScrollView>
  )
}

function HighToLow() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#232323" }}>
      <View>
        {IMAGES.map((i) => {
          return (
            <Card key={i.id} containerStyle={styles.cardContainer}>
              <Card.Image style={styles.cardImg} source={i.image}></Card.Image>
              <Text style={styles.cardText}>{i.title}</Text>
            </Card>
          )
        })}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
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
  cardContainer: {
    backgroundColor: "#48494B",
    display: "flex",
    borderColor: "#78797B",
    borderWidth: 3,
    borderRadius: 6,
    padding: 0,
  },
  cardImg: {
    width: "auto",
    height: 350,
  },
  cardText: {
    margin: 10,
    fontFamily: "KoHo-bold",
    color: "#f2f2f2",
  },
  banner: {
    padding: 50,
  },
  bannerText: {
    fontSize: 50,
    fontFamily: "KoHo-bold",
    color: "#F2F2F2",
  },
})
export default Gallery
