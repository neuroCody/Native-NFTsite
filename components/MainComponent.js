import React, { Component } from 'react';
import HeaderBar from './HeaderComponent'
import Home from './HomeComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, drawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

const HomeNav = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                display: 'none'
            }
        }
    
    }
)

const MainNavigator = createDrawerNavigator(
    {
        Home:{ 
            screen: HomeNav
        },
        // Gallery: {},
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

export default Main;