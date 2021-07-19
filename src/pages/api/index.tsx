import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View, Text } from '@tarojs/components'
import './index.scss'

interface IComponentState {
  pageList:Array<{pageName:string;url:string;}>
}

export default class Index extends Component<{},IComponentState> {

  constructor(props){
    super(props);
    this.state = {
      pageList: [
        {
          pageName: '网络',
          url: 'pages/api/apis/network/index'
        },
        {
          pageName: '权限',
          url: 'pages/api/apis/authority/index'
        },
        {
          pageName: '界面',
          url: 'pages/api/apis/surface/index'
        },
        {
          pageName: '界面-交互',
          url: 'pages/api/apis/surface/interactive/index'
        },
        {
          pageName: '界面-导航栏',
          url: 'pages/api/apis/surface/navigationBar/index'
        },
        {
          pageName: '界面-背景',
          url: 'pages/api/apis/surface/backgroundColor/index'
        },
        {
          pageName: '界面-Tab Bar',
          url: 'pages/api/apis/surface/tabBar/index'
        },
        {
          pageName: '界面-滚动',
          url: 'pages/api/apis/surface/scroll/index'
        },
        {
          pageName: '界面-窗口',
          url: 'pages/api/apis/surface/window/index'
        },
        {
          pageName: '界面-键盘',
          url: 'pages/api/apis/surface/keyboard/index'
        },
        {
          pageName: '路由',
          url: 'pages/api/apis/router/index'
        },
        {
          pageName: '页面通信事件',
          url: 'pages/api/apis/getOpenerEventChannel/index'
        },
        {
          pageName: '媒体-相机',
          url: 'pages/api/apis/media/camera/index'
        },
        {
          pageName: '媒体-视频',
          url: 'pages/api/apis/media/video/index'
        },
        {
          pageName: '媒体-加速计&陀螺仪',
          url: 'pages/api/apis/accelerometer/index'
        },
      ]
    }
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <ScrollView className='view-content'>
        <View className="view-item">
          {this.state.pageList.map(item =>
            <View className="view-text" onClick={()=> Taro.navigateTo({url:item.url})} key={item.url}>
              <Text className="entry-text">{item.pageName}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    )
  }
}
