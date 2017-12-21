import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DemoStyle from './demos/demo_style';
import DemoText from './demos/demo_text';
import DemoSrcoll from './demos/demo_srcoll';
import DemoFlatList from './demos/demo_flatlist';
import DemoTouch from './demos/demo_touch';
import DemoAnimated from './demos/demo_animated';

const HomeScreen = ({ navigation }) => (
  <View>
    <Button onPress={() => navigation.navigate('DemoStyle')} title="DemoStyle" height="30"/>
    <Button onPress={() => navigation.navigate('DemoText')} title="DemoText"  height="30"/>
    <Button onPress={() => navigation.navigate('DemoSrcoll')} title="DemoSrcoll"  height="30"/>
    <Button onPress={() => navigation.navigate('DemoFlatList')} title="DemoFlatList"  height="30"/>
    <Button onPress={() => navigation.navigate('DemoTouch')} title="DemoTouch"  height="30"/>
    <Button onPress={() => navigation.navigate('DemoAnimated')} title="DemoAnimated"  height="30"/>
  </View>
);

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
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
});

export default RootNavigator;