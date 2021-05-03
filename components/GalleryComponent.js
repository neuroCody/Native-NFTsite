import React, { Component, useState, useLayoutEffect } from "react"
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



class MostViewed extends Component {

  constructor(props){
    super(props);
    this.state= {
      showModal: false,
      id: '',
      title: '',
      image: '',
      price: '',
      views: '',
      date: '',
    }
  }

  toggleModal() {
    this.setState({showModal: !this.state.showModal});
}

  render(){
  const MostViewedArray = IMAGES.filter(({views}) => views > 100000 );
  const SortedViewArray = MostViewedArray.sort(function(a, b) {return b.views - a.views});

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#232323" }}>
    <View>
      {SortedViewArray.map((i) => {
        return (
          <View key={i.id}>
              <Card containerStyle={styles.cardContainer}>
              <TouchableOpacity
              onPress={() => {this.toggleModal(this.setState(i))}}
                >
                <Card.Image
                  style={styles.cardImg}
                  source={i.image}
                ></Card.Image>
                </TouchableOpacity>
                <Text style={{ marginLeft: 10, marginTop: 10 }}>
                  <Text style={styles.cardTitle}>{i.title}</Text>
                  <Text style={styles.price}> Price: ${i.price}</Text>
                </Text>
                <View style={styles.line}></View>
                <View
                  style={{ marginTop: 5, marginLeft: 10, marginBottom: 10 }}
                >
                  <Text style={styles.artistHeader}>Artist</Text>
                  <Text style={styles.artistName}>{i.title}</Text>
                </View>
              </Card>
            <View style={{ marginBottom: 50 }}></View>
            
          </View>
        )
      })}
      
    </View>
    <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.showModal}
          onRequestClose={() => this.toggleModal()}
      >
      <View style={styles.modal}>
      <View style={{padding: 10}}>
      <Icon 
          name='close'
          type='font-awesome'
          iconStyle={{
                  color: "#8B51F5",
                  marginLeft: '90%'
                }}
          size={35}
          onPress={()=> this.toggleModal()}
        />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.modalTitle}>
        {this.state.title}
        </Text>
        <Icon 
          name='heart'
          type='font-awesome'
          iconStyle={{
                  color: "#D7EB5A",
                  marginRight: '30%',
                  marginTop: 14
                }}
          size={25}
          
        />
        </View>
        
        <Card containerStyle={styles.cardContainer}>
          <Card.Image
            style={styles.cardImg}
            source={this.state.image}
          ></Card.Image>
          <Text style={{ marginLeft: 10, marginTop: 10 }}>
            
            <Text style={styles.modalArtist}>Artist</Text>
          </Text>
          <View style={styles.line}></View>
          <View
            style={{ marginTop: 5, marginLeft: 10, marginBottom: 10 }}
          >
            <Text style={styles.modalHeader}>Current Price</Text>
            <Text style={styles.modalPrice}>${this.state.price}</Text>
          </View>
          <Button
            title={"Buy Now"}
            titleStyle={{ color: "#232323", fontSize: 20 }}
            buttonStyle={{
              backgroundColor: "#D7EB5A",
              marginTop: 15,
              marginLeft: 25,
              marginRight: 25,
              marginBottom: 50,
              padding: 15,
              borderRadius: 17,
            }}
            onPress={() => 
                Alert.alert(
                    'Connect Wallet',
                    'Please connect your ETH Wallet to continue',
                    [
                        {
                            text: 'OK',
                            style: 'cancel'
                        }
                    ],
                    {cancelable: true}
                )
            }
          />
        </Card>
        </View>
      </Modal>
  </ScrollView>
  )
  }
}

function Newest() {

  const NewestDate = IMAGES.sort(function(a, b) {return a.date - b.date})
  
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#232323" }}>
    <View>
      {NewestDate.map((i) => {
        return (
          <View key={i.id}>
            <Card containerStyle={styles.cardContainer}>
              <Card.Image
                style={styles.cardImg}
                source={i.image}
              ></Card.Image>
              <Text style={{ marginLeft: 10, marginTop: 10 }}>
                <Text style={styles.cardTitle}>{i.title}</Text>
                <Text style={styles.price}> Price: ${i.price}</Text>
              </Text>
              <View style={styles.line}></View>
              <View
                style={{ marginTop: 5, marginLeft: 10, marginBottom: 10 }}
              >
                <Text style={styles.artistHeader}>Artist</Text>
                <Text style={styles.artistName}>{i.title}</Text>
              </View>
            </Card>
            <View style={{ marginBottom: 50 }}></View>
          </View>
        )
      })}
    </View>
  </ScrollView>
  )
}
////fix styling in the cards
function LowToHigh() {
  const LowtoHighArray = IMAGES.sort(function (a, b) {
    return a.price - b.price
  })
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#232323" }}>
      <View>
        {LowtoHighArray.map((i) => {
          return (
            <View key={i.id}>
              <Card containerStyle={styles.cardContainer}>
                <Card.Image
                  style={styles.cardImg}
                  source={i.image}
                ></Card.Image>
                <Text style={{ marginLeft: 10, marginTop: 10 }}>
                  <Text style={styles.cardTitle}>{i.title}</Text>
                  <Text style={styles.price}> Price: ${i.price}</Text>
                </Text>
                <View style={styles.line}></View>
                <View
                  style={{ marginTop: 5, marginLeft: 10, marginBottom: 10 }}
                >
                  <Text style={styles.artistHeader}>Artist</Text>
                  <Text style={styles.artistName}>{i.title}</Text>
                </View>
              </Card>
              <View style={{ marginBottom: 50 }}></View>
            </View>
          )
        })}
      </View>
    </ScrollView>
  )
}

function HighToLow() {
  const highToLowArray = IMAGES.sort(function (a, b) {
    return b.price - a.price
  })
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#232323" }}>
      <View>
        {highToLowArray.map((i) => {
          return (
            <View key={i.id}>
              <Card containerStyle={styles.cardContainer}>
                <Card.Image
                  style={styles.cardImg}
                  source={i.image}
                ></Card.Image>
                <Text style={{ marginLeft: 10, marginTop: 10 }}>
                  <Text style={styles.cardTitle}>{i.title}</Text>
                  <Text style={styles.price}> Price: ${i.price}</Text>
                </Text>
                <View style={styles.line}></View>
                <View
                  style={{ marginTop: 5, marginLeft: 10, marginBottom: 10 }}
                >
                  <Text style={styles.artistHeader}>Artist</Text>
                  <Text style={styles.artistName}>{i.title}</Text>
                </View>
              </Card>
              <View style={{ marginBottom: 50 }}></View>
            </View>
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
    display: 'flex',
    flexDirection: 'row-reverse',
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
      height: '100%'
  },
  modalTitle: {
    fontSize: 25,
    fontFamily: "KoHo-bold",
    color: "#F2F2F2",
    marginLeft: 15,
  },
  modalHeader:{
    fontFamily: "KoHo-bold",
    fontSize: 18,
    color: "#f2f2f2",
  },
  modalPrice: {
    fontSize: 30,
    fontFamily: "KoHo-bold",
    color: "#F2F2F2",
  }
})
export default Gallery
