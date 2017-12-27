import React, { Component } from 'react';
import { Animated, Text, Button, View, TouchableHighlight } from 'react-native';

export class FadeInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),        // 透明度初始值设为0
    };
  }

  componentDidMount() {
    Animated.spring(                            // 随时间变化而执行的动画类型
      this.state.fadeAnim,                      // 动画中的变量值
      {
        toValue: 300,                   // 透明度最终变为1，即完全不透明
        duration: 1000,
      }
    ).start();                               // 开始执行动画
  }
  
  render() {
    return (
      <Animated.View                            // 可动画化的视图组件
        style={{
          ...this.props.style,
          width: this.state.fadeAnim,          // 将透明度指定为动画变量值
          height: this.state.fadeAnim,
        }}
      >
      {this.props.children}
      </Animated.View>
    );
  }
}

export default class DemoAnimated extends Component {
  render() {
    return (
      <View>
        <FadeInView style={{ width: 100, height: 100, backgroundColor: '#ff5d5e' }}>
        </FadeInView>
      </View>
    )
  }
}