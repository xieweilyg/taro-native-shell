
import React, { Component } from 'react'
import Taro, { showModal } from '@tarojs/taro'
import { ScrollView, View, Text, Button, Input } from '@tarojs/components'
import './index.scss'

/**
 * 因为不能切换横竖屏，所以这个api测不了
 */

export default class Index extends Component {

  resizeHandler() {
    alert('resize')
  }
  resizeAlert() {
    Taro.showModal({
      content: 'resizeAlert'
    })
  }

  componentDidMount () {
    Taro.onWindowResize(this.resizeHandler)
    Taro.onWindowResize(this.resizeAlert)
  }

  componentWillUnmount () { }

  componentDidShow () {
  }

  componentDidHide () { }

  render () {
    return (
      <ScrollView className='view-content'>
        <View className="view-item">

          <Input />

            <Button onClick={()=> Taro.offWindowResize(this.resizeHandler)}>offWindowResize</Button>
          </View>
      </ScrollView>
    )
  }
}
