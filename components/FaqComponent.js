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
        expanded : false,
      }

      if (Platform.OS === 'android') {
          UIManager.setLayoutAnimationEnabledExperimental(true);
      }
  }

render() {

  return (
     <View>
          <TouchableOpacity ref={this.accordian} style={styles.row} onPress={()=>this.toggleExpand()}>
              <Text style={styles.title}>{this.state.title}</Text>
              <Icon name={this.state.expanded ? 'minus' : 'plus'} size={30} color={"black"} />
          </TouchableOpacity>
          <View style={styles.parentHr}/>
          {
              this.state.expanded &&
              <View style={styles.child}>
                  <Text>{this.state.data}</Text>    
              </View>
          }
          
     </View>
  )
}

toggleExpand=()=>{
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  this.setState({expanded : !this.state.expanded})
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
        />
      ),
    })
  })

  renderAccordians=()=> {
    const items = [];
    for (item of props) {
        items.push(
            <Accordian 
                title = {item.title}
                data = {item.data}
            />
        );
    }
    return items;
  }

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
          {/* { renderAccordians() } */}
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
  headerText: {
    color: "#D7EB5A",
    fontSize: 35,
    fontFamily: "asap-regular",
    paddingBottom: 20,
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
    textAlign: "center",
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
      backgroundColor: "gray",
  },
  parentHr:{
      height:1,
      color: "white",
      width:'100%'
  },
  child:{
      backgroundColor: "white",
      padding:16,
  }
})

export default Faq
