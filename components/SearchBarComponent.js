import React, { Component, useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native'
import * as Animatable from 'react-native-animatable';

const SearchBar = () => {
    const [text, onChangeText] = React.useState("");

    return(
        <Animatable.View 
            animation="slideInRight" 
            duration={1000} 
            style={{
                height: 40, 
                backgroundColor: '#232323', 
                justifyContent: 'center'
            }}
        >
            <SafeAreaView
                style={{flex: 1,}}
            >
                <TextInput
                    placeholder="Search"
                    style={styles.input} 
                    onChangeText={onChangeText}
                    value={text}
                />
            </SafeAreaView>
            </Animatable.View>
    )
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
    
})

export default SearchBar