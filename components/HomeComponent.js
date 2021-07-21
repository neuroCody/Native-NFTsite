import React, { Component, useState, useLayoutEffect } from "react"
import { Text, View, SafeAreaView, TextInput, StyleSheet, Image} from "react-native"
import { Icon, Card, Button } from "react-native-elements"
import { FlatList, ScrollView } from "react-native-gesture-handler"
import { createStackNavigator } from "@react-navigation/stack"
import * as Animatable from "react-native-animatable"
import BannerCarousel from "./BannerCarousel"


// Search Bar View Component
function HomeScreen({ navigation }) {
  const [shouldShow, setShouldShow] = useState(false)
  const [overlay, setOverlay] = useState(false)

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


  // Home Screen Styling
  return (
    <SafeAreaView style={styles.mainView}>
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

      <View style={styles.mainView}>
        <ScrollView style={{ height: 600 }}>
          <View>
            <View>
              <BannerCarousel />
            </View>
            <View style={styles.banner}>
              <Text style={styles.bannerText}>Buy, Sell & Create NFT Art</Text>
              
            </View>
            <View style={styles.subBanner}>
              <Text
                style={{ color: "#D7EB5A" }}
                onPress={() => navigation.navigate("Faq")}
              >
                Learn more
              </Text>
            </View>
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
                source={require("./images/priester-pink-eclipse.jpg")}
                style={styles.cardImg}
              ></Card.Image>
              <Text
                style={{
                  margin: 10,
                  fontFamily: "KoHo-bold",
                  fontSize: 25,
                  color: "#f2f2f2",
                }}
              >
                Most Viewed
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
                source={require("./images/nebulashorejpg.jpg")}
                style={styles.cardImg}
              ></Card.Image>
              <Text
                style={{
                  margin: 10,
                  fontFamily: "KoHo-bold",
                  fontSize: 25,
                  color: "#f2f2f2",
                }}
              >
                Newest
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
                source={require("./images/yo.png")}
                style={styles.cardImg}
              ></Card.Image>
              <Text
                style={{
                  margin: 10,
                  fontFamily: "KoHo-bold",
                  fontSize: 25,
                  color: "#f2f2f2",
                }}
              >
                Most Value
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
                source={require("./images/cats.jpg")}
                style={styles.cardImg}
              ></Card.Image>
              <Text
                style={{
                  margin: 10,
                  fontFamily: "KoHo-bold",
                  fontSize: 25,
                  color: "#f2f2f2",
                }}
              >
                High End NFTs
              </Text>
            </Card>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

// Header and Drawer Navigation components
const Stack = createStackNavigator()

function Home({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Visualux'
        component={HomeScreen}
        options={{
          headerTitle: "Visualux",
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
  mainView: {
    flex: 1,
    backgroundColor: "#232323",
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
  cardImg: {
    width: "auto",
    height: 350,
  },
  banner: {
    padding: 10,
    paddingTop: 20,
  },
  bannerText: {
    fontSize: 30,
    fontFamily: "asap-regular",
    color: "#F2F2F2",
  },
  subBanner: {
    paddingLeft:20 ,
    paddingTop: 2,
  }
})

class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [
        require('./images/MostViewedBanner.png'),
        require('./images/NewestBanner.png'),
        require('./images/LowToHighBanner.png'),
        require('./images/HighToLowBanner.png'),
      ], 
      imageOpacity: 0,
      currentImage: 0,
    }
  }

  componentDidMount() {
    this.imageFadeIn()
    this.switchImage()
  }

  imageFadeOut() {
    let imageOpacity = this.state.imageOpacity
    if(imageOpacity > 0) {
      this.setState(
        {
          imageOpacity: imageOpacity - 0.1
        },
        () => {
          setTimeout(() => {
            this.imageFadeOut();
          }, 10)
        }
      )
    }
  }

  imageFadeIn() {
    let imageOpacity = this.state.imageOpacity
    if(imageOpacity < 1) {
      this.setState(
        {
          imageOpacity: imageOpacity + 0.1,
        },
        () => {
          setTimeout(() => {
            this.imageFadeIn()
          }, 30)
        }
      )
    }
  }

  switchImage() {
    let { images } = this.state
    setInterval(() => { //6 second pause between images
      this.imageFadeOut();
      setTimeout(() => { // .5 sec delay after image fade out begins
        this.setState(
          {
            currentImage: this.state.currentImage < images.length-1 ? this.state.currentImage + 1 : 0,
            imageOpacity: 0,
          }, 
          () => {
            setTimeout(() => { // 0.1 sec delay before new image fade in
              this.imageFadeIn();
            }, 300)
          }
        )
      }, 500)
    }, 6000)
  }

  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          fluid
          source={ this.state.images[this.state.currentImage]}
          style={{flex: 1, opacity: this.state.imageOpacity, position:'relative'}}
        />
        
      </View>
    )
  }

}

export default Home
