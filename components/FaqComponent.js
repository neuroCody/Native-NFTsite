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
              <Text style={styles.title}>NFT?</Text>
              <Icon name={this.state.expanded1 ? 'minus' : 'plus'} size={30} color={"#8B51F5"} />
          </TouchableOpacity>
          <View style={styles.parentHr}/>
          {
              this.state.expanded1 &&
              <View style={styles.child}>
                  <Text style={styles.contentText}>NFT's are like cryptocurrency but even more confusing!</Text>    
              </View>
          }
          <TouchableOpacity ref={this.accordian} style={styles.row} onPress={()=>this.toggleExpand2()}>
              <Text style={styles.title}>Valuable?</Text>
              <Icon name={this.state.expanded2 ? 'minus' : 'plus'} size={30} color={"#8B51F5"} />
          </TouchableOpacity>
          <View style={styles.parentHr}/>
          {
              this.state.expanded2 &&
              <View style={styles.child}>
                  <Text style={styles.contentText}>Sure, they can be as valuable as a rolex watch or a pack of gum.</Text>    
              </View>
          }
          <TouchableOpacity ref={this.accordian} style={styles.row} onPress={()=>this.toggleExpand3()}>
              <Text style={styles.title}>Me NFT?</Text>
              <Icon name={this.state.expanded3 ? 'minus' : 'plus'} size={30} color={"#8B51F5"} />
          </TouchableOpacity>
          <View style={styles.parentHr}/>
          {
              this.state.expanded3 &&
              <View style={styles.child}>
                  <Text style={styles.contentText}>Possibly! there are currently cryptoesque blockchains that are using the same 
                  computing rigs designed for mining called Folders, or to be more specific, using them 
                  to map the data of protien folds. The exact stuff you and I are made up of!
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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          name='search'
          color={"#D7EB5A"}
          size={32}
          onPress={() => setShouldShow(!shouldShow)}
          style={{margin: 20, marginBottom: 35}}
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
            marginLeft: "33%",
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
