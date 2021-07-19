import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button, Video } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  videoContext

  constructor(props){
    super(props)
    this.state = {
      videoFilePath: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
    }
  }

  componentDidMount () { }

  componentDidShow () { }

  componentDidHide () { }

  chooseVideoHandler(this) {
    const that = this
    Taro.chooseVideo({
      sourceType: ['album','camera'],
      maxDuration: 5,
      camera: 'front',
      success: function (res) {
        console.log('选择成功，返回参数',res)
        // that.setState({
        //   videoFilePath: res.tempFilePath
        // })
      },
      fail: function (res) {
        console.log('选择失败，返回参数',res)
      },
      complete: function (res) {
        console.log('选择完成，返回参数',res)
      },
    })
  }

  render () {
    return (
      <View className='index'>
        <Text>选择视频的测试</Text>
        <Button 
          type="primary"
          onClick={this.chooseVideoHandler.bind(this)}
          style={{margin: 50}}
          >点我选择</Button>
        <View>
          <Video
            id='0'
            src={this.state.videoFilePath}
            controls
            autoplay
            onLoad={()=>{
              this.videoContext = Taro.createVideoContext('0');
            }}
          />
        </View>
      </View>
    )
  }
}
