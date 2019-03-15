import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/Home/HomeScreen';
import UsersScreen from "../screens/Users/UsersScreen";

const HomeStack = createStackNavigator({
    Home: HomeScreen,
});

HomeStack.navigationOptions = {
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
};

const UsersStack = createStackNavigator({
    Users: UsersScreen
});

UsersStack.navigationOptions = {
    tabBarLabel: 'Users',
};

export default createBottomTabNavigator({
    UsersStack,
    HomeStack,
});
