import React from 'react'
import Taro from '@tarojs/taro'
import { Camera, Button, View, Image, Video, Text } from '@tarojs/components'
import './index.scss'

/**
 * camera问题较多，大都因为api引起，所以要先解决api问题
 */

export default class PageView extends React.Component {
  cameraContext
  constructor() {
    super(...arguments)
    this.state = {
      devicePosition: 'back',
      imageSrc: '',
      videoUrl: ''
    }
  }

  componentDidMount() {
  }

  handleError() {
    alert('您的浏览器不允许使用摄像头')
  }

  handleStop() {
    alert('摄像头被非正常终止')
  }

  toggleDevice = () => {
    this.setState({
      devicePosition: this.state.devicePosition == 'back' ? 'front' : 'back'
    })
  }

  takePhoto = () => {
    try{
      this.cameraContext.takePhoto({
        quality: 'high',
        success: res => {
          const {tempImagePath} = res;
          this.setState({
            imageSrc: tempImagePath
          });
        },
        fail: res => alert('拍照失败：'+JSON.stringify(res))
      })
    }catch(err){
      alert('出错：'+JSON.stringify(err))
    }
  }

  startRecord = () => {
    Taro.showToast({
      title: '开始录像',
      icon: 'none'
    });
    this.cameraContext.startRecord()
  }

  stopRecord = () => {
    Taro.showToast({
      title: '停止录像',
      icon: 'none'
    });
    this.cameraContext.stopRecord({
      success: (result) => {
        const {tempVideoPath} = result
        this.setState({
          videoUrl: tempVideoPath
        });
      }
    })
  }

  render() {
    const {imageSrc, devicePosition, videoUrl} = this.state;
    return (
      <View className='components-page'>
        <View className='components-page__header'>
          <Text className="header-text">系统相机测试</Text>
        </View>
        <View className='components-page__body'>
          <View className='components-page__body-example example'>
            <View className='example-body'>
            <Camera className='cammer-content' ref={ref => this.cameraContext = Taro.createCameraContext(ref)} onStop={this.handleStop} onError={this.handleError} devicePosition={this.state.devicePosition}></Camera></View>
            <Button className="btn" type='primary' onClick={this.toggleDevice}>开启{devicePosition == 'back' ? '前置' : '后置'}镜头</Button>
            <Button className="btn" type='primary' onClick={this.takePhoto}>拍照</Button>
            <Button className="btn" type='primary' onClick={this.startRecord}>开始录像</Button>
            <Button className="btn" type='primary' onClick={this.stopRecord}>停止录像</Button>

            {imageSrc && <Image className="preview" src={imageSrc} />}
            {videoUrl && <Video className="preview" src={videoUrl} autoplay />}
          </View>
        </View>

      </View>
    )
  }
}
