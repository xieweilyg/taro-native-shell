import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View, Text, Button, Image } from '@tarojs/components'
import api1 from '@img/api.png';
import api2 from '@img2/api.png';
import './index.scss'

export default class Index extends Component {

  componentDidMount () { 
    // Taro.setTabBarStyle({
    //   color: '#FF0000',
    //   selectedColor: '#00FF00',
    //   backgroundColor: '#FFFFF',
    //   borderStyle: 'black'
    // })
    Taro.showLoading({
      title: '加载中...'
    });
    setTimeout(()=>{
      Taro.hideLoading()
    }, 3000)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleMoreInfoClick() {
    alert('被点中的tabbar图片会被替换成其他图片，试试看~')
  }

  render () {
    return (
      <ScrollView className='index'>
        <View className="view-content">
          <View className="view-item">
            <Text className="view-text">Hi，{Yang.name}，你已经看到首页啦，下方就是tabbar的配置效果~ 
              <Text className="point-text" onClick={this.handleMoreInfoClick}>点我查看更多&gt;&gt;</Text>
            </Text>
            <Image
          style='width: 300px;height: 100px;background: #fff;'
          src={api1}
        />
         <Image
          style='width: 300px;height: 100px;background: #fff;'
          src={api2}
        />
            <Button onClick={()=>{
              Taro.switchTab({
                url: 'pages/index/index'
              })
            }}>点我跳转tabBar</Button>
            <Button type="primary" onClick={()=>{
              Taro.navigateTo({
                url: 'pages/login/index'
              })
            }}>点我跳转Login</Button>

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

            <Button onClick={()=> Taro.setTabBarItem({ // 这个有问题
              index: 2,
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
        </View>
      </ScrollView>
    )
  }
}
