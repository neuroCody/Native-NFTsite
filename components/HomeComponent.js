import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderBar from './HeaderComponent';



class Home extends Component{


    render(){

        return(
            <View style={{ backgroundColor: '#232323', paddingBottom: 500}}>
            <ScrollView
                style={{ height:600}}
            >
            <View>
            <Card
                containerStyle = {{
                    backgroundColor: '#48494B',
                    display: 'flex',
                    borderColor: '#78797B',
                    borderWidth: 3,
                    borderRadius: 6,
                    padding: 0,
                }}
            >
                <Card.Image 
                source={require('./images/organic_mass.jpg')}
                style={styles.cardImg}>

                </Card.Image>
                <Text
                    style={{
                        margin: 10, 
                        fontFamily: "KoHo-bold",
                        color: '#f2f2f2'
                        }}>
                    Home Page
                </Text>

            </Card>
            <Card
                containerStyle = {{
                    backgroundColor: '#48494B',
                    display: 'flex',
                    borderColor: '#78797B',
                    borderWidth: 3,
                    borderRadius: 6,
                    padding: 0,
                }}
            >
                <Card.Image 
                source={require('./images/laser_cloud.jpg')}
                style={styles.cardImg}>

                </Card.Image>
                <Text
                    style={{
                        margin: 10, 
                        fontFamily: "KoHo-bold",
                        color: '#f2f2f2'
                        }}>
                    Home Page
                </Text>

            </Card>
            </View>
            </ScrollView>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    cardImg: {
        width: 'auto',
        height: 350
    }
})


export default Home;