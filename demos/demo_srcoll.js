import React, { Component } from 'react';
import { ScrollView, Image, Text, View } from 'react-native'

export default class DemoScroll extends Component {
  render() {
    let url={ uri: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1233220276,429539496&fm=27&gp=0.jpg' };
    return (
      <ScrollView>
        <Image source={url} style={{ width: 400, height: 400 }} />
        <Image source={url} style={{ width: 400, height: 400 }} />
        <Image source={url} style={{ width: 400, height: 400 }} />
        <Image source={url} style={{ width: 400, height: 400 }} />
        <Image source={url} style={{ width: 400, height: 400 }} />
      </ScrollView>
    );
  }
}