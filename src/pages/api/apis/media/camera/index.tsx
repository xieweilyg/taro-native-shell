import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View, Text, Camera, Button } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  cameraContext

  takePhoto(){
    try{
      this.cameraContext.takePhoto({
        quality: 'high',
        success: () => {
          Taro.showToast({
            title: '拍摄成功'
          })
        },
        fail: res => alert('拍照失败：'+JSON.stringify(res))
      })

    }catch(err){
      alert('拍摄失败：'+JSON.stringify(err))
    }
  }

  componentDidMount () {
    this.cameraContext = Taro.createCameraContext();
  }

  componentWillUnmount () { }

  componentDidShow () {
    alert(this.cameraContext===undefined ? '初始化失败': '初始化成功')
  }

  componentDidHide () { }

  render () {
    return (
      <ScrollView className='view-content'>
        <View className="view-item">
            <Camera
              id="crtCamera"
              devicePosition="back"
            />
          </View>
          <Button className="btn" onClick={this.takePhoto.bind(this)}>拍照</Button>
          <Button className="btn">开始录制</Button>
          <Button className="btn">结束录制</Button>
      </ScrollView>
    )
  }
}
