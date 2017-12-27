import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

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

export default HomeScreen;