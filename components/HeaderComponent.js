import React, { Component, useState } from 'react';
import { View,Text, StyleSheet } from 'react-native';
import Search from './SearchBarComponent';
import { Header, Card } from 'react-native-elements';

// Function to Render Header Image

const styles = StyleSheet.create({
    cardImg: {
        width: 'auto',
        height: 350
    }
})

class HeaderBar extends Component {

    

    render(){
        return(
            <View>
                <Header 
                    
                    leftComponent={{ icon: 'menu', color: '#8B51F5', size:45}}
                    centerComponent={{ 
                        text: "Visualux", 
                        style:{
                            color: "#F2F2F2",
                            fontSize: 37,
                            fontFamily: 'satisfy-regular',

                        }
                    
                    }}
                    rightComponent={{ icon: 'search', color: '#D7EB5A', size: 37}}
                    backgroundColor= "#232323"
                />
                {<Search />}
                <View>

                {/* placeholder Card component (Start)*/}
                    <Card
                        containerStyle = {{
                            backgroundColor: '#48494B',
                            display: 'flex',
                            borderColor: '#78797B',
                            borderWidth: 3,
                            borderRadius: 6,
                            padding: 0
                            
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
                            Laser Cloud
                        </Text>
                        
                    </Card>
                {/* placeholder Card component (End)*/}

                </View>
            </View>
        )
    }
}

export default HeaderBar;