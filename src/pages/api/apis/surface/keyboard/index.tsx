
import React, { Component } from 'react'
import Taro, { showModal } from '@tarojs/taro'
import { ScrollView, View, Text, Button, Input } from '@tarojs/components'
import './index.scss'

/**
 * 因为不能切换横竖屏，所以这个api测不了
 */

export default class Index extends Component {

  changeHandler(e) {
    // alert('change:'+JSON.stringify(e));
    setTimeout(()=>{
      Taro.hideKeyboard();
    }, 3000)
  }

  componentDidMount () {
    Taro.onKeyboardHeightChange(this.changeHandler)
  }

  componentWillUnmount () { }

  componentDidShow () {
  }

  componentDidHide () { }

  render () {
    return (
      <ScrollView className='view-content'>
        <View className="view-item">
          <Input style={{padding: 30}} autoFocus placeholder="提起键盘3秒后，键盘自动消失"/>
          </View>
      </ScrollView>
    )
  }
}
