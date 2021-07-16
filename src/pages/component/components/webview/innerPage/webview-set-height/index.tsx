import { Component } from 'react'
import { ScrollView, View, WebView, Text } from '@tarojs/components'
import WebViewBox from '../webViewBox'
import './index.scss'

/**
 * webview默认撑满容器高度，要想让webview显示固定的高度，就设置容器的高度，或者容器内设置webview的高度
 */

export default class Index extends Component {

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleMessage() {
    alert('I got a message')
  }

  render () {
    return (
      <View>
        <Text className="title">设置webview的高度，就不设置容器的高度</Text>
        <ScrollView className="webview-contain">
          <WebView
          style={{height: 200}}
          src='https://www.baidu.com/'
          onMessage={this.handleMessage}
          />
        </ScrollView>
        <Text className="title">设置容器的高度，就不设置webview的高度</Text>
        <View className="webview-contain" style={{height: 200}}>
          <WebView
          src='https://www.baidu.com/'
          onMessage={this.handleMessage}
          />
        </View>
        <View className="webview-contain" style={{height: 200}}>
          <WebViewBox />
        </View>
      </View>
    )
  }
}
