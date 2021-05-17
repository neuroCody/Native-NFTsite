import React, { Component, useState, useLayoutEffect }from 'react'
import { Text, View, SafeAreaView, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon, Card } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack'
import * as Animatable from 'react-native-animatable'
import Accordion from 'react-native-collapsible/Accordion'

const SECTIONS = [
    {
        title: "NFT?",
        content: "NFT's are like cryptocurrency but even more confusing!"
    },
    {
        title: "Valuable?",
        content: "Sure, they can be as valuable as a rolex watch or a pack of gum."
    },
    {
        title: "Me NFT?",
        content: `Possibly! there are currently cryptoesque blockchains that are using the same computing rigs designed for mining called Folders, or to be more specific, using them to map the data of protien folds. The exact stuff you and I are made up of!`,
    }
]





class AccordionView extends Component {

    constructor(props) {
        super(props);
        this.state= {
            activeSections: [],
            expanded: false,
        }
    }

    toggleExpanded = () => {
        this.setState({expanded: !this.state.expanded})
    }

    renderHeader = (section, isActive) => {
        return(
            
            <View style={styles.header}>
                
                <Text style={styles.headerText}>
                {section.title}
                </Text>
                <Icon 
                    name={this.state.expanded ? 'minus' : 'plus'}
                    type='font-awesome'
                    iconStyle={{
                    color: "#8B51F5",
                    paddingBottom: 10,
                    paddingLeft: '20%'
                    }}
                    size={35}
                />
                
            </View>
        
        )
    }


    renderContent = (section) => {
        return(
            <View style={styles.content}>
                <Text style={styles.contentText}>{section.content}</Text>
            </View>
        )
    }

    updateSections = (activeSections) => {
        this.setState({activeSections});
        this.toggleExpanded(activeSections[0])
        
        
    }   

    render() {
        return(
            
            <Accordion
                sections={SECTIONS}
                activeSections={this.state.activeSections}
                // renderSectionTitle={this.renderSectionTitle}
                renderHeader={this.renderHeader}
                renderContent={this.renderContent}
                onChange={this.updateSections}
            />
            
        )
    }
}


function FaqScreen({ navigation }) {
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
                    justifyContent: 'center'
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
                    <Text
                        style={styles.bannerText}
                    >
                    Frequently{'\n'}
                    Asked{'\n'}
                    Questions{'\n'}
                    </Text>
                    <AccordionView />
                </ScrollView>
            </View>
    </SafeAreaView>
    
    );
}



const Stack = createStackNavigator();

function Faq({navigation}) {
    

    return (
        <Stack.Navigator>
        <Stack.Screen
            name="Visualux"
            component={FaqScreen}
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
    bannerText: {
        fontSize: 50,
        fontFamily: "KoHo-bold",
        color: "#F2F2F2",
    },
    header: {
        flex: 1,
        flexDirection: "row",
        alignItems:'center',
        justifyContent: 'center',
        textAlign: "center",
        borderBottomWidth: 2,
        borderBottomColor: "#48494B",
        padding: 2,
        margin: 10,
    },
    headerText: {
        color: "#D7EB5A",
        fontSize: 35,
        fontFamily: "asap-regular",
        paddingBottom: 20,
    },
    content: {
        flexGrow: 1,
        alignItems:'center',
        justifyContent: 'center',
        textAlign: "center",
        padding: 5,
    },
    contentText: {
        color: "#F2F2F2",
        fontFamily: 'asap-regular',
        fontSize: 17,
        flexGrow: 1,
        alignItems:'center',
        justifyContent: 'center',
        textAlign: "center",
        padding: 5,
        borderBottomWidth: 2,
        borderBottomColor: "#48494B",
    }
})

export default Faq;