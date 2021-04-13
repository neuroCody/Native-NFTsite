import React, { Component, useState } from 'react';
import { View, Image, SafeAreaView,  Text } from 'react-native';
import Search from './SearchBarComponent';
import { Header, SearchBar } from 'react-native-elements';

// Function to Render Header Image




const CustomLeftComponent = () => {
    return(
        <View>
            <Image source={require('./fractal.png')} style={{ width: 27, height: 27, backgroundColor: "#dbedf3"}} />
        </View>
    )
}

class HeaderBar extends Component {

    render(){
        return(
            <View>
                <Header 
                    
                    leftComponent={{ icon: 'menu', color: '#8B51F5', size:45}}
                    centerComponent={{ 
                        text: "Visualux", 
                        style:{ 
                            color: "#dbedf3",
                            fontSize: 37,
                            fontFamily: 'satisfy-regular',

                        }
                    
                    }}
                    rightComponent={{ icon: 'search', color: '#D7EB5A', size: 37}}
                    backgroundColor= "#232323"
                />
                {<Search />}
                <Text>Here is some text</Text>
            </View>
        )
    }
}

export default HeaderBar;