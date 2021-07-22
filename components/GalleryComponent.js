import React, { Component, useState, useLayoutEffect, useEffect } from "react"
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native"
import { Icon, Card, Button } from "react-native-elements"
import { ScrollView } from "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { IMAGES } from "../arrays/images"
import * as Animatable from "react-native-animatable"
import Spinner from "react-native-loading-spinner-overlay"
import MostViewed from "./GalleryTabs/MostViewed"
import Newest from "./GalleryTabs/Newest"
import LowToHigh from "./GalleryTabs/LowToHigh"
import HighToLow from "./GalleryTabs/HighToLow"

function GalleryScreen(props) {
  const [shouldShow, setShouldShow] = useState(false)
  const [search, setSearch] = useState("")

  const newSearch = (text) => {
    search = setSearch(text)
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
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
            onChangeText={newSearch}
            // value={text}
          />
        </Animatable.View>
      ) : null}
      <GalleryNav />
    </SafeAreaView>
  )
}

const Stack = createStackNavigator()

//MAINEXPORT/////////////////////////////////////////
class Gallery extends Component{
  state = {
    spinner: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        spinner: !this.state.spinner
      });
      }, 3000);
  }

  render(){
  return (
    <NavigationContainer independent={true}>
      <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
          color={'#8B51F5'}
          overlayColor={"rgba(0, 18, 25, 0.9)"}
          size={'large'}
      />
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
                onPress={() => this.props.navigation.toggleDrawer()}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
  }
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



//STYLES
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
  cardTitle: {
    marginLeft: 10,
    fontFamily: "KoHo-bold",
    fontSize: 18,
    color: "#f2f2f2",
  },
  price: {
    fontFamily: "KoHo-regular",
    color: "#78797B",
    flexDirection: "row-reverse",
  },
  line: {
    borderBottomWidth: 2,
    borderBottomColor: "#78797B",
    padding: 2,
    margin: 10,
  },
  artistHeader: {
    fontFamily: "KoHo-bold",
  },
  artistName: {
    fontFamily: "KoHo-regular",
  },
  viewsHeader: {
    fontFamily: "KoHo-bold",
    display: "flex",
    flexDirection: "row-reverse",
  },
  banner: {
    padding: 50,
  },
  bannerText: {
    fontSize: 50,
    fontFamily: "KoHo-bold",
    color: "#F2F2F2",
  },
  modal: {
    backgroundColor: "#232323",
    height: "100%",
  },
  modalTitle: {
    fontSize: 25,
    fontFamily: "KoHo-bold",
    color: "#F2F2F2",
    marginLeft: 15,
  },
  modalHeader: {
    fontFamily: "KoHo-bold",
    fontSize: 18,
    color: "#f2f2f2",
  },
  modalPrice: {
    fontSize: 30,
    fontFamily: "KoHo-bold",
    color: "#F2F2F2",
  },
  spinnerTextStyle: {
    color: '#8B51F5',
  },
})

export default Gallery
