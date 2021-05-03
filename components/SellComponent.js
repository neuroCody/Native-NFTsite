import React, { Component, useState, useLayoutEffect } from "react"
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Image,
} from "react-native"
import { Icon, Card, Button } from "react-native-elements"
import { ScrollView } from "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import * as Animatable from "react-native-animatable"

function SellScreen({ navigation }) {
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
          animation='slideInRight'
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

      <View style={{ flex: 1, backgroundColor: "#232323" }}>
        <ScrollView style={{ height: 600 }}>
          <UploadListing />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

class UploadListing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageUrl: "",
    }
  }

  render() {
    return (
      <View>
        <Text style={styles.bannerText}>Sell NFT</Text>
        <View>
          <Button
            title='Upload File'
            icon={
              <Icon
                name='upload'
                type='font-awesome'
                iconStyle={{
                  color: "#D7EB5A",
                  marginRight: 10,
                }}
                // size={32}
                // onPress={() => setShouldShow(!shouldShow)}
              />
            }
            buttonStyle={{
              backgroundColor: "#78797B",
              margin: 50,
              padding: 20,
            }}
          />
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Image
            source={require("./images/priester-pink-eclipse.jpg")}
            style={{ width: 350, height: 500 }}
          />
        </View>
        <Text
          style={{
            fontFamily: "KoHo-bold",
            fontSize: 35,
            color: "#F2F2F2",
            marginLeft: 30,
            marginBottom: 20,
            marginTop: 40,
          }}
        >
          NFT Details
        </Text>
        <Text style={styles.inputHeader}>Title</Text>
        <TextInput placeholder='Title' style={styles.textInput} />
        <Text style={styles.inputHeader}>Description</Text>
        <TextInput
          multiline={true}
          numberofLines={5}
          placeholder='Description'
          style={styles.textInput}
        />
        <Text style={styles.inputHeader}>Set Price</Text>
        <TextInput placeholder='setprice' style={styles.textInput} />
        <Text style={styles.inputHeader}>Set Bid</Text>
        <TextInput placeholder='setbid' style={styles.textInput} />
        <Button
          title='Add Listing'
          titleStyle={{ color: "#232323" }}
          buttonStyle={{
            backgroundColor: "#D7EB5A",
            margin: 50,
            padding: 20,
            borderRadius: 10,
          }}
        />
      </View>
    )
  }
}
const Stack = createStackNavigator()

function Sell({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Visualux'
          component={SellScreen}
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
  inputHeader: {
    fontFamily: "asap-regular",
    fontSize: 20,
    color: "#D7EB5A",
    marginLeft: 30,
    marginBottom: 20,
  },
  textInput: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30,
    backgroundColor: "#000000",
    borderBottomColor: "#232323",
    borderRadius: 5,
    padding: 12,
    color: "#D7EB5A",
  },
  banner: {
    padding: 50,
  },
  bannerText: {
    flex: 1,
    alignSelf: "center",
    fontSize: 50,
    fontFamily: "KoHo-bold",
    color: "#F2F2F2",
  },
})

export default Sell
