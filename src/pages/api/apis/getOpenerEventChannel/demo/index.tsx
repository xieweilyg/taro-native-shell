import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount () { 
   const eventChannel = Taro.Current.page.getOpenerEventChannel()
   eventChannel.on('sendData', function(data){
     alert("demo:"+data)
   })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>this is demo</Text>
        <Button
          onClick = {()=>{
            const eventChannel = Taro.Current.page.getOpenerEventChannel()
            eventChannel.emit('getUserName', '哈喽~')
          }}
        >点我发消息给上个页面</Button>
      </View>
    )
  }
}
