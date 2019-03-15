import React from 'react';
import {
    createAppContainer,
    createBottomTabNavigator,
} from 'react-navigation';

import UsersIndex from './../screens/Users';
import HomeIndex from './../screens/Home';
import {Platform} from "react-native";
import TabBarIcon from "../components/TabBarIcon";

const HomeStack = {
    screen: HomeIndex,
    navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({focused}) => (
            <TabBarIcon
                focused={focused}
                name={
                    Platform.OS === 'ios'
                        ? `ios-information-circle${focused ? '' : '-outline'}`
                        : 'md-information-circle'
                }
            />
        ),
    }
};

const UserStack = {
    screen: UsersIndex,
    navigationOptions: {
        tabBarLabel: 'Lists des utilisateurs',
        tabBarIcon: ({focused}) => (
            <TabBarIcon
                focused={focused}
                name={
                    Platform.OS === 'ios'
                        ? `ios-information-circle${focused ? '' : '-outline'}`
                        : 'md-information-circle'
                }
            />
        ),
    }
};

export default createAppContainer(createBottomTabNavigator({
    Home: HomeStack,
    Users: UserStack,
}));
