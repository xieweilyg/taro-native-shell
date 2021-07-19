
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
            <Button onClick={()=> Taro.showTabBarRedDot({
              index: 0,
              success: (e) => alert('showTabBarRedDot success: '+JSON.stringify(e)),
              fail: (e) => alert('showTabBarRedDot fail: '+JSON.stringify(e)),
              complete: (e) => Taro.showModal({
                title: 'showTabBarRedDot',
                content: 'complete: '+JSON.stringify(e),
              }),
            })}>showTabBarRedDot</Button>

            <Button onClick={()=> Taro.hideTabBarRedDot({
              index: 0,
              success: (e) => alert('hideTabBarRedDot success: '+JSON.stringify(e)),
              fail: (e) => alert('hideTabBarRedDot fail: '+JSON.stringify(e)),
              complete: (e) => Taro.showModal({
                title: 'hideTabBarRedDot',
                content: 'complete: '+JSON.stringify(e),
              }),
            })}>hideTabBarRedDot</Button>

            <Button onClick={()=> Taro.hideTabBarRedDot({
              index: 1,
              success: (e) => alert('hideTabBarRedDot success: '+JSON.stringify(e)),
              fail: (e) => alert('hideTabBarRedDot fail: '+JSON.stringify(e)),
              complete: (e) => Taro.showModal({
                title: 'hideTabBarRedDot',
                content: 'complete: '+JSON.stringify(e),
              }),
            })}>对没有红点的tabBar移除红点</Button>

            <Button onClick={()=> Taro.hideTabBar({
              success: (e) => alert('hideTabBar success: '+JSON.stringify(e)),
              fail: (e) => alert('hideTabBar fail: '+JSON.stringify(e)),
              complete: (e) => Taro.showModal({
                title: 'hideTabBar',
                content: 'complete: '+JSON.stringify(e),
              }),
            })}>hideTabBar</Button>

            <Button onClick={()=> Taro.showTabBar({
              success: (e) => alert('showTabBar success: '+JSON.stringify(e)),
              fail: (e) => alert('showTabBar fail: '+JSON.stringify(e)),
              complete: (e) => Taro.showModal({
                title: 'showTabBar',
                content: 'complete: '+JSON.stringify(e),
              }),
            })}>showTabBar</Button>

            <Button onClick={()=> Taro.setTabBarStyle({
              color: '#000000',
              selectedColor: '#1b3c22',
              backgroundColor: '#bb22cc',
              borderStyle: 'black',
              success: (e) => alert('setTabBarStyle success: '+JSON.stringify(e)),
              fail: (e) => alert('setTabBarStyle fail: '+JSON.stringify(e)),
              complete: (e) => Taro.showModal({
                title: 'setTabBarStyle',
                content: 'complete: '+JSON.stringify(e),
              }),
            })}>setTabBarStyle</Button>

            <Button onClick={()=> Taro.setTabBarItem({
              index: 1,
              text: '中心',
              success: (e) => alert('setTabBarItem success: '+JSON.stringify(e)),
              fail: (e) => alert('setTabBarItem fail: '+JSON.stringify(e)),
              complete: (e) => Taro.showModal({
                title: 'setTabBarItem',
                content: 'complete: '+JSON.stringify(e),
              }),
            })}>setTabBarItem</Button>

            <Button onClick={()=> Taro.setTabBarBadge({
              index: 1,
              text: '嘻嘻嘻',
              success: (e) => alert('setTabBarBadge success: '+JSON.stringify(e)),
              fail: (e) => alert('setTabBarBadge fail: '+JSON.stringify(e)),
              complete: (e) => Taro.showModal({
                title: 'setTabBarBadge',
                content: 'complete: '+JSON.stringify(e),
              }),
            })}>setTabBarBadge(右上角添加文本)</Button>

            <Button onClick={()=> Taro.removeTabBarBadge({
              index: 1,
              success: (e) => alert('removeTabBarBadge success: '+JSON.stringify(e)),
              fail: (e) => alert('removeTabBarBadge fail: '+JSON.stringify(e)),
              complete: (e) => Taro.showModal({
                title: 'removeTabBarBadge',
                content: 'complete: '+JSON.stringify(e),
              }),
            })}>removeTabBarBadge(右上角添加文本)</Button>
            
          </View>
      </ScrollView>
    )
  }
}
