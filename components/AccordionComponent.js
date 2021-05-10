import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager } from 'react-native'
import { Colors } from './Colors'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Touchable } from 'react-native';

export default class Accordion extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: props.data, 
            expanded: false,
        }
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
    render() {
        return(
            <View>
                <TouchableOpacity 
                    ref={this.accordion}
                    style={StyleSheet.row}
                    onPress={()=> this.toggleExpand()}
                >
                    <Text 
                        style={[styles.title, styles.font]}>
                            {this.props.title}
                        </Text>
                        <Icon 
                            name={!this.state.expanded ? 'plus' : 'minus'}
                            type='font-awesome'
                            iconStyle={{
                                color: "#8B51F5",
                                paddingBottom: 10,
                                paddingLeft: '20%'
                            }}
                            size={35}
                        />
                </TouchableOpacity>
                <View style={styles.parentHr}/>
                {
                    this.state.expanded &&
                    <View style={styles.child}>
                        <Text> {this.props.data}</Text>
                    </View>
                }
            </View>
        )
    }
    toggleExpand=()=>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({expanded: !this.state.expanded})
    }
}

const styles = StyleSheet.create({
    title:{
        color: "#D7EB5A",
        fontSize: 14,
        fontFamily: "asap-regular",
        paddingBottom: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 56,
        paddingLeft: 25,
        paddingRight: 18,
        alighItems: 'center',
        backgroundColor: "#232323",
    },
    parentHr: {
        height: 1,
        color: 'white',
        width: '100%',
    },
    child: {
        backgroundColor: "#48494B",
        padding: 16,
    }
})