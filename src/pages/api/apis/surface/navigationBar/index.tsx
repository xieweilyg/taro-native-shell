
import React, { Component } from 'react'
import Taro, { showModal } from '@tarojs/taro'
import { ScrollView, View, Text, Button } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <ScrollView className='view-content'>
        <View className="view-item">
            <Button onClick={()=> Taro.showNavigationBarLoading({
              success: (e) => alert('showNavigationBarLoading success: '+JSON.stringify(e)),
              fail: (e) => alert('showNavigationBarLoading fail: '+JSON.stringify(e)),
              complete: (e) => Taro.showModal({
                title: 'showNavigationBarLoading',
                content: 'complete: '+JSON.stringify(e),
              }),
            })}>showNavigationBarLoading</Button>

            <Button onClick={()=> Taro.hideNavigationBarLoading({
              success: (e) => alert('hideNavigationBarLoading success: '+JSON.stringify(e)),
              fail: (e) => alert('hideNavigationBarLoading fail: '+JSON.stringify(e)),
              complete: (e) => Taro.showModal({
                title: 'hideNavigationBarLoading',
                content: 'complete: '+JSON.stringify(e),
              }),
            })}>hideNavigationBarLoading</Button>

            <Button onClick={()=> Taro.setNavigationBarTitle({
              title: '嘻嘻嘻新标题',
              success: (e) => alert('setNavigationBarTitle success: '+JSON.stringify(e)),
              fail: (e) => alert('setNavigationBarTitle fail: '+JSON.stringify(e)),
              complete: (e) => Taro.showModal({
                title: 'setNavigationBarTitle',
                content: 'complete: '+JSON.stringify(e),
              }),
            })}>setNavigationBarTitle</Button>

            <Button onClick={()=> Taro.setNavigationBarColor({
              backgroundColor: '#098abe',
              frontColor: '#ffffff',
              success: (e) => alert('setNavigationBarColor success: '+JSON.stringify(e)),
              fail: (e) => alert('setNavigationBarColor fail: '+JSON.stringify(e)),
              complete: (e) => Taro.showModal({
                title: 'setNavigationBarColor',
                content: 'complete: '+JSON.stringify(e),
              }),
            })}>setNavigationBarColor</Button>
            
          </View>
      </ScrollView>
    )
  }
}
