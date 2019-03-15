import {createStackNavigator} from 'react-navigation';
import UserScreen from './UsersScreen';
import TestScreen from './TestScreen'
import ShowUser from "./ShowUser";

export default createStackNavigator({
    UserScreen,
    TestScreen,
    ShowUser
});
