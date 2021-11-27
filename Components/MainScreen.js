import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform
} from "react-native";

import HomeTab from './AppTabNavigator/HomeTab'
import ProfileTab from './AppTabNavigator/ProfileTab'
// import SearchTab from './AppTabNavigator/SearchTab'
// import AddMediaTab from './AppTabNavigator/AddMediaTab'
// import LikesTab from './AppTabNavigator/LikesTab'

import { TabNavigator } from 'react-navigation'

class MainScreen extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <AppTabNavigator />
        );
    }
}
export default MainScreen;

const AppTabNavigator = TabNavigator({

    HomeTab: {
        screen: HomeTab
    },
    ProfileTab: {
        screen: ProfileTab
    }
    // SearchTab: {
    //     screen: SearchTab

    // },
    // AddMediaTab: {
    //     screen: AddMediaTab
    // },
    // LikesTab: {
    //     screen: LikesTab
    // }
}, {
        animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition: "bottom",
        tabBarOptions: {
            style: {
                ...Platform.select({
                    android: {
                        backgroundColor: 'white'
                    }
                })
            },
            activeTintColor: '#000',
            inactiveTintColor: '#d1cece',
            showLabel: false,
            showIcon: true
        }
    })

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});