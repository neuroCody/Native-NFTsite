import React, { Component } from 'react';
import Home from './HomeComponent';
import Gallery from './GalleryComponent';
import { View, Platform,  StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import CustomDrawerContentComponent from './DrawerStyleComponent';


const HomeNav = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            title: "Visualux",
            headerStyle: {
                backgroundColor: '#232323',
                paddingBottom:10,
                marginTop: 0

                
            },
            headerTitleStyle: {
                fontFamily: 'satisfy-regular',
                color: '#F2F2F2',
                fontSize: 45,
                marginLeft: '25%',
            },
            headerLeft: <Icon
                            name='bars'
                            type='font-awesome'
                            iconStyle={{
                                color: "#8B51F5",
                                margin: 15,
                            }}
                            size={45}
                            onPress={() => navigation.toggleDrawer()}
                        />,
            headerRight: <Icon
                            name='search'
                            type='font-awesome'
                            iconStyle={{
                                color: '#D7EB5A',
                                margin: 20,
                                marginBottom: 35
                            }}
                            size={40}
                        />,

        })
    }
)

const GalleryNav = createStackNavigator(
    {
        Gallery: { 
            screen: Gallery, 
        },
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            title: "Visualux",
            headerStyle: {
                backgroundColor: '#232323',
                paddingBottom:10,
                marginTop: 0
                // textAlign: 'center',
                
            },
            headerTitleStyle: {
                fontFamily: 'satisfy-regular',
                color: '#F2F2F2',
                fontSize: 45,
                marginLeft: '25%',
            },
            headerLeft: <Icon
                            name='bars'
                            type='font-awesome'
                            iconStyle={{
                                color: "#8B51F5",
                                margin: 15,
                            }}
                            size={45}
                            onPress={() => navigation.toggleDrawer()}
                        />,
            headerRight: <Icon
                            name='search'
                            type='font-awesome'
                            iconStyle={{
                                color: '#D7EB5A',
                                margin: 20,
                                marginBottom: 35
                            }}
                            size={40}
                        />,
        })
    },
    
)

const MainNavigator = createDrawerNavigator(
    {
        Home:{ 
            screen: HomeNav,
            
        },
        Gallery: { 
            screen: GalleryNav
        },
        // Featured: {},
        // FAQ: {},
        // Sell: {
        //     navigationOptions: {
        //         drawerLabel: 'Sell on Visualux'
        //     }
        // },
        // Login: {},
        // SignUp: {
        //     navigationOptions: {
        //         drawerLabel: 'Sign Up'
        //     }
        // },
    },
    {
        drawerBackgroundColor: '#232323',
        contentComponent: CustomDrawerContentComponent
    }
)

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {

    state = {
        searchBarFocused: true
    }

    render () {
        return (
            <View 
                style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight,
                    
                }}
            >
                <AppNavigator 
                    style={{
                        backgroundColor: '#272727'
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerTitle: {
        color: "#F2F2F2",
        fontSize: 37,
        fontFamily: "satisfy-regular",
    }
})

export default Main;