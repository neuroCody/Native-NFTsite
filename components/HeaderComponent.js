import React, { Component, useState } from 'react';
import { View,Text, StyleSheet } from 'react-native';
import Search from './SearchBarComponent';
import { Header, Icon } from 'react-native-elements';

// Function to Render Header Image

const CustomLeftComponent = ({navigation}) => {
    return(
        <Icon
        name= 'bars'
        type= 'font-awesome'
        iconStyle={{
            color: '#8B51F5',
        }}
        size={45}
        />
    )
    }

class HeaderBar extends Component {

    

    render(){
        return(
            <View>
                <Header 
                    
                    // leftComponent={{ icon: 'menu', color: '#8B51F5', size:45, onPress:{()=> toggleDrawer()} }}
                    leftComponent={<CustomLeftComponent />}
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