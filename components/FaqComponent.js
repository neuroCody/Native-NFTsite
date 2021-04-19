import React, { Component } from "react"
import { Text, View, StyleSheet } from "react-native"
import { Card } from "react-native-elements"
import { ScrollView } from "react-native-gesture-handler";

class Faq extends Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#232323" }}>
                <ScrollView style={{ height: 600 }}>
                    <Text
                        style={{
                            color: '#F2F2F2'
                        }}
                    > WAT IS NTF DOES???</Text>
                </ScrollView>
            </View>
        )
    }
}



export default Faq;