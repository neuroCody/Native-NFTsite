import React, {Component, useState, useLayoutEffect} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager, SafeAreaView, ScrollView, TextInput} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import Icon from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable"



const SECTIONS = [
    {
        id: 0,
        title: "NFT?",
        data: "NFT's are like cryptocurrency but even more confusing!"
    },
    {
        id: 1,
        title: "Valuable?",
        data: "Sure, they can be as valuable as a rolex watch or a pack of gum."
    },
    {
        id: 2,
        title: "Me NFT?",
        data: `Possibly! there are currently cryptoesque blockchains that are using the same computing rigs designed for mining called Folders, or to be more specific, using them to map the data of protien folds. The exact stuff you and I are made up of!`,
    }
]

class Accordian extends Component{

  constructor(props) {
      super(props);
      this.state = { 
        id: SECTIONS.id,
        title: SECTIONS.title,
        data: SECTIONS.data,
        expanded1 : false,
        expanded2 : false,
        expanded3 : false,
      }

      if (Platform.OS === 'android') {
          UIManager.setLayoutAnimationEnabledExperimental(true);
      }
  }

render() {

  return (
     <View>
          <TouchableOpacity ref={this.accordian} style={styles.row} onPress={()=>this.toggleExpand1()}>
              <Text style={styles.title}>What are NFTs?</Text>
              <Icon name={this.state.expanded1 ? 'minus' : 'plus'} size={30} color={"#8B51F5"} />
          </TouchableOpacity>
          <View style={styles.parentHr}/>
          {
              this.state.expanded1 &&
              <View style={styles.child}>
                  <Text style={styles.contentText}>Non-Fungible Tokens (NFT) are unique digital assets that are part of a
                   blockchain and verify ownership of a specific item. “Non-fungible” means something is one-of-a-kind and 
                   cannot be replaced with the same item. Fungible items, such as fiat currencies or cryptocurrencies differ 
                   in that they can be traded for the same item. For example, if you replace one bitcoin with another, you 
                   will have the same thing. If you have a non-fungible item, such as a movie ticket, you cannot replace it 
                   with any other movie ticket as the ticket is unique to a time and place.</Text>    
              </View>
          }
          <TouchableOpacity ref={this.accordian} style={styles.row} onPress={()=>this.toggleExpand2()}>
              <Text style={styles.title}>NFT Art?</Text>
              <Icon name={this.state.expanded2 ? 'minus' : 'plus'} size={30} color={"#8B51F5"} />
          </TouchableOpacity>
          <View style={styles.parentHr}/>
          {
              this.state.expanded2 &&
              <View style={styles.child}>
                  <Text style={styles.contentText}>Crypto art has been around for a few years but has exploded in popularity since
                   the start of 2021 as a hot new tech trend. The first uses of NFTs was for an online game called Cryptokitties 
                   which allowed users to trade and sell digital kittens. There are numerous digital marketplaces where users can 
                   buy and sell digital items. While sellers can accept any currency for their NFTs, cryptocurrencies like Bitcoin 
                   and Ethereum tend to be the most popular. How it works is buyers get the ownership rights, or license, to a 
                   digital item.</Text>    
              </View>
          }
          <TouchableOpacity ref={this.accordian} style={styles.row} onPress={()=>this.toggleExpand3()}>
              <Text style={styles.title}>Who can Use NFTs?</Text>
              <Icon name={this.state.expanded3 ? 'minus' : 'plus'} size={30} color={"#8B51F5"} />
          </TouchableOpacity>
          <View style={styles.parentHr}/>
          {
              this.state.expanded3 &&
              <View style={styles.child}>
                  <Text style={styles.contentText}>In a word, anyone!
                  {"\n"}
                    Celebrities such as Lindsay Lohan and Post Malone have jumped into the world of NFTs, 
                    selling videos and experiences online. Digital marketplaces have made buying and selling 
                    of NFTs easy for anyone. If you have something to sell or enough currency to purchase an NFT, 
                    then it’s all yours.
                  {"\n"}
                    As NFTs are still relatively new, there is a first-mover advantage. Memes and tweets are just 
                    the start of it, there is still so much unexplored space in the industry and those who get there 
                    first will benefit from the media exposure and new audiences.
                  </Text>
              </View>
          }
          
    </View>
  )
}

toggleExpand1=()=>{
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  this.setState({expanded1 : !this.state.expanded1})
}
toggleExpand2=()=>{
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  this.setState({expanded2 : !this.state.expanded2})
}
toggleExpand3=()=>{
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  this.setState({expanded3 : !this.state.expanded3})
}

}





function FaqScreen(props) {
  const {navigation} = props
  const [shouldShow, setShouldShow] = useState(false)

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <Icon
  //         name='search'
  //         color={"#D7EB5A"}
  //         size={32}
  //         onPress={() => setShouldShow(!shouldShow)}
  //         style={{margin: 20, marginBottom: 35}}
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
      <View style={{ flex: 1, backgroundColor: "#232323" }}>
        <ScrollView style={{ height: 600 }}>
          <Text style={styles.bannerText}>
            Frequently{"\n"}
            Asked{"\n"}
            Questions{"\n"}
          </Text>
          <View>
          <Accordian />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const Stack = createStackNavigator()

function Faq({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Visualux'
        component={FaqScreen}
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
              color={"#8B51F5"}
              size={35}
              onPress={() => navigation.toggleDrawer()}
              style={{margin: 15}}
            />
          ),
        }}
      />
    </Stack.Navigator>
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
  bannerText: {
    fontSize: 50,
    fontFamily: "KoHo-bold",
    color: "#F2F2F2",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#48494B",
    padding: 2,
    margin: 10,
  },
  content: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 5,
  },
  contentText: {
    color: "#F2F2F2",
    fontFamily: "asap-regular",
    fontSize: 17,
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderBottomWidth: 2,
    borderBottomColor: "#48494B",
  },
  title:{
    color: "#D7EB5A",
    fontSize: 35,
    fontFamily: "asap-regular",
    paddingBottom: 20,
  },
  row:{
      flexDirection: 'row',
      justifyContent:'space-between',
      height:56,
      paddingLeft:25,
      paddingRight:18,
      alignItems:'center',
      backgroundColor: "#232323",
  },
  parentHr:{
      height:1,
      color: "white",
      width:'100%'
  },
  child:{
      backgroundColor: "#48494B",
      padding:16,
      color: "#F2F2F2"
  }
})

export default Faq
