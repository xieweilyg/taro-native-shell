import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  constructor(props){
    super(props)
  }

  mycallback1(data){
    alert(data+' 1')
  }
  mycallback2(data){
    Taro.showToast({
      title:data+' 2'
    })
  }

  componentDidMount () {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Button type="primary" onClick={
          ()=>{
            Taro.navigateTo({
              url:'pages/api/apis/getOpenerEventChannel/demo/index',
              events:{
                getUserName:(data)=>{
                  alert(data)
                }
              },
              success: (res)=>{
                console.log('success', res)
                res.eventChannel.emit('sendData', "yang")
              }
            })
          
          }
        }>点击跳转</Button>
      </View>
    )
  }
}
