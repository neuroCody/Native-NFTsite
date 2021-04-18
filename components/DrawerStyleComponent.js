
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

class CustomDrawerContentComponent extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction)
    }
    render() {
        return(
        <ScrollView>
            <SafeAreaView
                style={styles.container}
                forceInset={{top: 'always', horizontal: 'never'}}
            >

                <View style={styles.drawerHeader}>
                    <View style={{flex: 2}}>
                        <Text 
                            style={styles.drawerHeaderText}>Visualux</Text>
                    </View>
                </View>
                <View 
                    style={styles.drawerItem}
                >
                    <Text 
                        style={styles.drawerItemText}
                        onPress={() => this,this.navigateToScreen('Home')}
                    >
                        Home
                    </Text>
                </View>
                <View 
                    style={styles.drawerItem}
                >
                    <Text 
                        style={styles.drawerItemText}
                        onPress={() => this,this.navigateToScreen('Gallery')}
                    >
                        Gallery
                    </Text>
                </View>
            </SafeAreaView>
        </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#232323',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
    },
    drawerHeaderText: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 34,
        fontFamily: 'satisfy-regular'
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24,
    },
    drawerItem: {
        alignItems: 'center',
        justifyContent: 'center',
        margin:15
        
    },
    drawerItemText: {
        color: '#D7EB5A',
        fontSize: 24,
        fontFamily: 'asap-regular'
    }
})

export default CustomDrawerContentComponent;