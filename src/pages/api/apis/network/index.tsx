import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View, Text, Button, Image, Video } from '@tarojs/components'
import { ButtonProps } from '@tarojs/components/types/Button'
import './index.scss'

/**
 * 下载内容：图片、视频、音频、文本文件等
 * 目前，视频的代码一放出来就报错
 */

 const resourcesUrl = {
   imageUrl: 'https://www.baidu.com/img/flexible/logo/pc/result.png',
   videoUrl: 'https://vd2.bdstatic.com/mda-iirf0wahuapb0m82/sc/mda-iirf0wahuapb0m82.mp4',
 }

interface IComponentState {
  tempImagePath: string;
  tempVideoPath: string;
  [key:string]: any;
}

export default class Index extends Component<{}, IComponentState> {

  constructor(props){
    super(props)
    this.state = {
      tempImagePath: '',
      tempVideoPath: '',
    }
  }

  butttonConfig = {
    type: "primary",
    plain: true,
    hoverStyle: "color: 'blue';",
  } as ButtonProps;

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  downloadFile(url, tempPath:string){
    const that = this;
    Taro.downloadFile({
      url,
      success: res => {
        if (res.statusCode === 200) {
          alert('下载成功')
          that.setState({
            [tempPath]: res.tempFilePath
          })
        }
      }
    })
  }

  downloadImage(){
    this.downloadFile(resourcesUrl.imageUrl, "tempImagePath");
  }
  downloadVideo(){
    this.downloadFile(resourcesUrl.videoUrl, "tempVideoPath");
  }

  render () {
    return (
      <ScrollView className='view-content'>
        <View className="view-item test-one">
            <View className="content-hd">
              <Text className="content-hd-text">下载 - downloadFile</Text>
            </View>
            <View className="content-bd">
              <Button {...this.butttonConfig} onClick={this.downloadImage.bind(this)}>
                <Text>点击下载图片</Text>
              </Button>
              <View className="show-image">
                {this.state.tempImagePath ? <Image
                  style='width: 100%;height: 100%;background: #fff;'
                  src={this.state.tempImagePath}
                ></Image> : <Text>图片未下载</Text>}
              </View>
            </View>
            <Button {...this.butttonConfig} onClick={()=> Taro.redirectTo({
              url: 'pages/component/components/view/index',
            })}></Button>
        </View>
        {/* <View className="view-item test-one">
          <View className="content-bd">
                <Button {...this.butttonConfig} onClick={this.downloadVideo.bind(this)}>
                  <Text>点击下载视频</Text>
                </Button>
                <View>
                  {this.state.tempVideoPath ? <Video
                    id='video'
                    src={"https://vd2.bdstatic.com/mda-iirf0wahuapb0m82/sc/mda-iirf0wahuapb0m82.mp4"}
                    controls={true}
                    autoplay={false}
                    loop={false}
                    muted={false}
                  >视频不可播放</Video> : <Text>视频未下载</Text>}
                </View>
              </View>
        </View> */}
      </ScrollView>
    )
  }
}
