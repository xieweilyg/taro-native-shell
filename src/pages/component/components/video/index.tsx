import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { Video, View, Button, Text } from '@tarojs/components'
import './index.scss'

/**
 * src 支持网络路径（需要验证是否支持本地缓存视频地址）
 * duration 指定视频时长（设置后只是显示播放到那个时长，但超时后还是会继续播放，所以个人觉得没有什么用）
 * controls
 * danmuList 不支持
 * danmuBtn 不支持
 * enableDanmu 不支持
 * autoplay
 * muted
 * initialTime
 * pageGesture 不支持
 * direction 不支持
 * showProgress 不支持
 * showFullscreenBtn 不支持
 * showPlayBtn 不支持
 * showCenterPlayBtn 
 * enableProgressGesture 不支持
 * objectFit 
 * showMuteBtn 不支持
 * title 不支持
 * playBtnPosition 不支持
 * enablePlayGesture 不支持
 * autoPauseIfNavigate 不支持
 * autoPauseIfOpenNative 不支持
 * vslideGesture 不支持
 * vslideGestureInFullscreen 不支持
 * adUnitId 不支持
 * posterForCrawler 不支持
 * showCastingButton 不支持
 * onPlay 
 * onPause
 * onEnded
 * onTimeUpdate
 * onFullscreenChange
 * onWaiting 不支持
 * onError
 * onProgress 不支持
 * onLoadedMetaData
 */

// interface TestParams {
//   testTitle: string;
//   testComment: string;
//   testConfig: IconProps;
// }

// 通用测试用例
// const commonTestCase:Array<TestParams> = [
//   {
//     testTitle: 'success',
//     testComment: '成功图标，默认23px，默认颜色',
//     testConfig: {
//       type: "success"
//     },
//   },
//   {
//     testTitle: 'success',
//     testComment: '成功图标，黑色',
//     testConfig: {
//       type: "success",
//       color: 'black'
//     },
//   },
//   {
//     testTitle: 'success',
//     testComment: '成功图标，设置60px，紫色',
//     testConfig: {
//       type: "success",
//       size: '60',
//       color: '#9714d8'
//     },
//   },
//   {
//     testTitle: 'success_no_circle',
//     testComment: '成功图标，无圈圈',
//     testConfig: {
//       type: "success_no_circle",
//       size: '60',
//     },
//   },
//   {
//     testTitle: 'info',
//     testComment: '信息图标',
//     testConfig: {
//       type: "info",
//       size: '60',
//     },
//   },
//   {
//     testTitle: 'warn',
//     testComment: '警告图标',
//     testConfig: {
//       type: "warn",
//       size: '60',
//     },
//   },
//   {
//     testTitle: 'waiting',
//     testComment: '等待图标',
//     testConfig: {
//       type: "waiting",
//       size: '60',
//     },
//   },
//   {
//     testTitle: 'cancel',
//     testComment: '取消图标',
//     testConfig: {
//       type: "cancel",
//       size: '60',
//     },
//   },
//   {
//     testTitle: 'download',
//     testComment: '下载图标',
//     testConfig: {
//       type: "download",
//       size: '60',
//     },
//   },
//   {
//     testTitle: 'search',
//     testComment: '搜索图标',
//     testConfig: {
//       type: "search",
//       size: '60',
//     },
//   },
//   {
//     testTitle: 'clear',
//     testComment: '清除图标',
//     testConfig: {
//       type: "clear",
//       size: '60',
//     },
//   },
// ]

export default class Index extends Component {

  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  videoContext
  count = 0

  onLoadedMetaData = (e) => {
    this.setState({count: this.state.count+1});
    alert('onLoadedMetaData'+this.state.count)
    console.log('onLoadedMetaData',e);
  }

  fullScreen = () => {
    this?.videoContext?.videoRef?.requestFullScreen();
    console.log('fullScreen');
  }
  onPlay = (e) => {
    alert(JSON.stringify(e))
  }
  onPause = (e) => {
    alert(JSON.stringify(e))
  }
  onEnded = (e) => {
    alert('onEnded：'+JSON.stringify(e))
  }
  onTimeUpdate = (e) => {
    console.log('onTimeUpdate：', e)
  }
  onError = (e) => {
    alert('onError')
    console.log('onError', e)
  }
  onFullscreenChange = (e) => {
    this.count++;
    alert('onFullscreenChange'+this.count)
    console.log('onFullscreenChange', e)
  }

  render () {
    return (
      <View>
        <View className='test-item'>
          <View className='components-page'>
              <View className='test-item'>
              <View className="test-block-hd">
                <Text className="test-block-hd__text"> —— 视频组件测试 —— </Text>
              </View>

              <View className="test-block-bd">
                <View className='components-page'>
                <Text className="bug-title">问题：initialTime设置无效</Text>
                  <Video
                    src='http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
                    autoplay
                    initialTime={20000}
                    ref={ref => {this.videoContext = Taro.createVideoContext('video', ref)}}
                    id='video'
                  />
                  <View className='control-list'>
                    <Button type="primary" onClick={this.fullScreen}>进入全屏</Button>
                  </View>
                </View>
              </View>

              {/* <View className="test-block-bd">
                <View className='components-page'>
                <Text className="bug-title">问题：onPlay onPause事件会在拖动进度条时触发</Text>
                  <Video
                    src='http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
                    // controls={false}
                    poster="https://tukuimg.bdstatic.com/processed/59dfed09b5efe57cdc0f3b7c4d2b2d2f.jpeg@s_0,w_660,h_370,q_80,f_webp"
                    onPlay={this.onPlay}
                    onPause={this.onPause}
                    objectFit='contain'
                    id='video'
                  />
                </View>
              </View> */}

              {/* <View className="test-block-bd">
                <View className='components-page'>
                <Text className="bug-title">测试看看</Text>
                  <Video
                    src='http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
                    autoplay
                    controls
                    poster="https://tukuimg.bdstatic.com/processed/59dfed09b5efe57cdc0f3b7c4d2b2d2f.jpeg@s_0,w_660,h_370,q_80,f_webp"
                    onEnded={this.onEnded}
                    onError={this.onError}
                    onLoadedMetaData={this.onLoadedMetaData}
                    objectFit='contain'
                    id='video'
                  />
                </View>
              </View> */}
              
            </View>
          </View>
        </View>
      </View>
    )
  }
}
