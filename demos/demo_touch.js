import React, { Component } from 'react';
import { TouchableNativeFeedback, TouchableHighlight, Text, View, StyleSheet } from 'react-native'

class DemoTouch extends Component {
  _onPressButton() {
    alert("You tapped the button!");
  }

  render() {
    return (
      <View>
        <TouchableHighlight onPress={this._onPressButton} style={styles.style2}>
          <Text style={styles.style1}>TouchableHighlight</Text>
        </TouchableHighlight>
        <TouchableNativeFeedback onPress={this._onPressButton} style={styles.style2}>
          <Text style={styles.style1}>TouchableNativeFeedback</Text>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  style1: {
    height: 40,
    fontSize: 30,
    lineHeight: 40,
    textAlign: 'center',
  },
  style2: {
    borderWidth: 3, 
    borderStyle: 'solid', 
    borderColor: '#ccc',
    backgroundColor:'#0080ff',
  }
});

export default DemoTouch;