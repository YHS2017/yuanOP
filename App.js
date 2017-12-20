import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DemoStyle from './demos/demo_style';
import DemoText from './demos/demo_text';

const HomeScreen = ({ navigation }) => (
  <View>
    <Button onPress={() => navigation.navigate('DemoStyle')} title="DemoStyle" height="30"/>
    <Button onPress={() => navigation.navigate('DemoText')} title="DemoText"  height="30"/>
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
});

export default RootNavigator;