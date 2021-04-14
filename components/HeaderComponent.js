import React, { Component, useState } from 'react';
import { View,Text, StyleSheet } from 'react-native';
import Search from './SearchBarComponent';
import { Header, Card } from 'react-native-elements';

// Function to Render Header Image


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
            </View>
        )
    }
}

export default HeaderBar;