import React from 'react';
import { StackNavigator } from 'react-navigation';
import DemoHome from '../demos/demo_home';
import DemoStyle from '../demos/demo_style';
import DemoText from '../demos/demo_text';
import DemoSrcoll from '../demos/demo_srcoll';
import DemoFlatList from '../demos/demo_flatlist';
import DemoTouch from '../demos/demo_touch';
import DemoAnimated from '../demos/demo_animated';

const AppNavigator = StackNavigator({
    Home: {
        screen: DemoHome,
        navigationOptions: { headerTitle: 'HomeScreen' },
    },
    DemoStyle: {
        screen: DemoStyle,
        navigationOptions: { headerTitle: 'DemoStyle' },
    },
    DemoText: {
        screen: DemoText,
        navigationOptions: { headerTitle: 'DemoText' },
    },
    DemoSrcoll: {
        screen: DemoSrcoll,
        navigationOptions: { headerTitle: 'DemoSrcoll' },
    },
    DemoFlatList: {
        screen: DemoFlatList,
        navigationOptions: { headerTitle: 'DemoFlatList' },
    },
    DemoTouch: {
        screen: DemoTouch,
        navigationOptions: { headerTitle: 'DemoTouch' },
    },
    DemoAnimated: {
        screen: DemoAnimated,
        navigationOptions: { headerTitle: 'DemoAnimated' },
    },
}, {
        initialRouteName: 'Home'
    }
);

export {AppNavigator};