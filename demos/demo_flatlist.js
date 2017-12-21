import React, { Component } from 'react';
import { FlatList, Image, Text, View, StyleSheet } from 'react-native'

export default class DemoFlatList extends Component {
  render() {
    let data = [
      { key: '我说一句', style: 'style1' },
      { key: '你说一句', style: 'style2' },
      { key: '我说一句', style: 'style1' },
      { key: '你说一句', style: 'style2' },
      { key: '我说一句', style: 'style1' },
      { key: '你说一句', style: 'style2' },
      { key: '我说一句', style: 'style1' },
      { key: '你说一句', style: 'style2' },
      { key: '我说一句', style: 'style1' },
      { key: '你说一句', style: 'style2' },
      { key: '我说一句', style: 'style1' },
      { key: '你说一句', style: 'style2' },
      { key: '我说一句', style: 'style1' },
      { key: '你说一句', style: 'style2' },
      { key: '我说一句', style: 'style1' },
      { key: '你说一句', style: 'style2' },
      { key: '我说一句', style: 'style1' },
      { key: '你说一句', style: 'style2' },
      { key: '我说一句', style: 'style1' },
      { key: '你说一句', style: 'style2' }
    ]
    return (
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={item.style == 'style1' ? styles.style1 : styles.style2}>{item.key}</Text>}
      />
    );
  }
}

const styles = StyleSheet.create({
  style1: {
    textAlign: 'left',
    fontSize: 30,
    height: 40,
    lineHeight:40,
  },
  style2: {
    textAlign: 'right',
    fontSize: 30,
    height: 40,
    lineHeight:40,
  },
});