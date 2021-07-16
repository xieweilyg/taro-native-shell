import React, { Component } from 'react'
import Taro from '@tarojs/taro'
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
            <Button onClick={()=> Taro.showToast({
              title: '成功',
              icon: 'success',
              duration: 2000
            })}>showToast</Button>

            <Button onClick={()=> Taro.showModal({
              title: '提示',
              content: '这是一个模态弹窗',
              success: function (res) {
                if (res.confirm) {
                  alert('用户点击确定')
                } else if (res.cancel) {
                  alert('用户点击取消')
                }
              }
            })}>showModal</Button>

            <Button onClick={()=> Taro.showLoading({
              title: '加载中',
            })}>showLoading</Button>

            <Button onClick={()=> Taro.hideLoading()}>
              hideLoading
            </Button>

            <Button onClick={()=> Taro.showActionSheet({
              itemList: ['A', 'B', 'C'],
              success: function (res) {
                alert(JSON.stringify(res.tapIndex))
              },
              fail: function (res) {
                alert(res.errMsg)
              }
            })}>showActionSheet</Button>
          </View>
      </ScrollView>
    )
  }
}
