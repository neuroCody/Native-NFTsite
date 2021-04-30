import React, { useState, useLayoutEffect }from 'react';
import { Text, View, SafeAreaView, TextInput, StyleSheet } from 'react-native';
import { Icon, Card } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import * as Animatable from 'react-native-animatable';




function HomeScreen({ navigation }) {
    const [shouldShow, setShouldShow] = useState(false);

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
            onPress={() => setShouldShow(!shouldShow)} />
        ),
    });
    })


    return(
    <SafeAreaView
                style={{flex: 1, backgroundColor: '#232323'}}
                
            >
            {shouldShow ? (
        <Animatable.View 
            animation="slideInRight" 
            duration={900} 
            style={{
                height: 40, 
                backgroundColor: '#232323', 
                justifyContent: 'center',
            }}
            
        >
            <TextInput
                placeholder="Search"
                style={styles.input} 
                // onChangeText={onChangeText}
                // value={text}
            />
        </Animatable.View>
            ) : null}
    
        <View style={{ flex: 1, backgroundColor: "#232323" }}>
            <ScrollView style={{ height: 600 }}>
            <View>
                <View style={styles.banner}>
                <Text style={styles.bannerText}>Buy and Sell NFT Art</Text>
                <Text style={{ color: "#D7EB5A" }}>Learn more</Text>
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
                    source={require("./images/organic_mass.jpg")}
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
                    source={require("./images/laser_cloud.jpg")}
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
    </SafeAreaView>
    
    );
}

const Stack = createStackNavigator();

function Home({navigation}) {
    

    return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Visualux"
            component={HomeScreen}
            options= {{
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
    );

}

const styles = StyleSheet.create({
    input: {
        height: 34, 
        borderColor: '#D7EB5A',
        borderWidth: 1,
        borderRadius: 5,
        color: '#D7EB5A',
        backgroundColor: "#232323",
        paddingLeft: 10,
        margin: 3,
        fontFamily: 'KoHo-regular',
    },
    cardImg: {
        width: "auto",
        height: 350,
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

export default Home;