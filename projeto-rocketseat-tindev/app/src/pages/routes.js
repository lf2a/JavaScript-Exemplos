import { createAppContainer, createSwitchNavigator, /*createStackNavigator, createBottomTabNavigator*/ } from 'react-navigation';

import Login from './Login';
import Main from './Main';

export default createAppContainer(
    createSwitchNavigator({
        Login,
        Main,
    })
    
    // createStackNavigator({
    //     Login,
    //     Main,
    // })

    // createBottomTabNavigator({
    //     Login,
    //     Main,
    // })
);