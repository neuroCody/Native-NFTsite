import React, { Component, useState } from 'react';
import { View, Image, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import { Header, SearchBar } from 'react-native-elements';

// Function to Render Header Image
const Search = () => {
    const [text, onChangeText] = React.useState("Search");

    return(
        <SafeAreaView>
            <TextInput
                style={styles.input} 
                onChangeText={onChangeText}
                value={text}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 27, 
        width: 150,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "#FFF",
        paddingLeft: 10,
        margin: 3
    }
})

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
                    placement="left"
                    leftComponent={<CustomLeftComponent />}
                    centerComponent={{ 
                        text: "Visualux",
                        placement: 'left', 
                        style:{ 
                            color: "#dbedf3",
                            fontSize: 23,
                            fontFamily: 'monospace',
                            fontWeight: 'bold',
                        }
                    
                    }}
                    rightComponent={<Search />}
                    backgroundColor= "#283149"
                />
            </View>
        )
    }
}

export default HeaderBar;