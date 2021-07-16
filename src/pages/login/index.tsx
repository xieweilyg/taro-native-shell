import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View, Text, Button } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentDidMount () { 
    // Taro.setTabBarStyle({
    //   color: '#FF0000',
    //   selectedColor: '#00FF00',
    //   backgroundColor: '#FFFFF',
    //   borderStyle: 'black'
    // })
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
          <Button type="primary" onClick={()=>Taro.redirectTo({
          url: 'pages/component/components/view/index',
        })}>调整</Button>
            <Text className="view-text">Hi，年轻人，你已经看到首页啦，下方就是tabbar的配置效果~ 
              <Text className="point-text" onClick={this.handleMoreInfoClick}>点我查看更多&gt;&gt;</Text>
            </Text>
          </View>
          <Button onClick={()=>{
              Taro.switchTab({
                url: 'pages/index/index'
              })
            }}>点我跳转tabBar</Button>
        </View>
      </ScrollView>
    )
  }
}
