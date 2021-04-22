import React, { Component } from "react"
import { Text, View, StyleSheet } from "react-native"
import { Card } from "react-native-elements"
import { ScrollView } from "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"

const Tab = createMaterialTopTabNavigator()

class Gallery extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Most Viewed' component={MostViewed} />
          <Tab.Screen name='Newest' component={Newest} />
          <Tab.Screen name='Price: low to high' component={LowToHigh} />
          <Tab.Screen name='Price: high to low' component={HighToLow} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

function MostViewed() {
  return (
    <View style={{ flex: 1, backgroundColor: "#232323" }}>
      <ScrollView style={{ height: 600 }}>
        <View>
          <Card
            containerStyle={{
              backgroundColor: "#48494B",
              display: "flex",
              borderColor: "#78797B",
              borderWidth: 3,
              borderRadius: 6,
              padding: 0,
            }}
          >
            <Card.Image
              source={require("./images/prism-cloud.jpg")}
              style={styles.cardImg}
            ></Card.Image>
            <Text
              style={{
                margin: 10,
                fontFamily: "KoHo-bold",
                color: "#f2f2f2",
              }}
            >
              Home Page
            </Text>
          </Card>
          <Card
            containerStyle={{
              backgroundColor: "#48494B",
              display: "flex",
              borderColor: "#78797B",
              borderWidth: 3,
              borderRadius: 6,
              padding: 0,
            }}
          >
            <Card.Image
              source={require("./images/pastel_street.jpg")}
              style={styles.cardImg}
            ></Card.Image>
            <Text
              style={{
                margin: 10,
                fontFamily: "KoHo-bold",
                color: "#f2f2f2",
              }}
            >
              Home Page
            </Text>
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
        <Card
          containerStyle={{
            backgroundColor: "#48494B",
            display: "flex",
            borderColor: "#78797B",
            borderWidth: 3,
            borderRadius: 6,
            padding: 0,
          }}
        >
          <Card.Image
            source={require("./images/prism-cloud.jpg")}
            style={styles.cardImg}
          ></Card.Image>
          <Text
            style={{
              margin: 10,
              fontFamily: "KoHo-bold",
              color: "#f2f2f2",
            }}
          >
            Home Page
          </Text>
        </Card>
      </View>
    </ScrollView>
  )
}

function LowToHigh() {
  return (
    <ScrollView>
      <View>
        <Text>$ low to high</Text>
      </View>
    </ScrollView>
  )
}

function HighToLow() {
  return (
    <ScrollView>
      <View>
        <Text>$ high to low</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  cardImg: {
    width: "auto",
    height: 350,
  },
})

export default Gallery
