import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { Image, View, Text } from '@tarojs/components'
import miniIcon from '../../../../assets/img/test.jpeg'
import img from '@img/index.png'
import { ImageProps } from '@tarojs/components/types/Image'
import './index.scss'

/**
 * src 支持网络路径、本地导入
 * mode: scaleToFill aspectFit aspectFill widthFix
 * onError
 * onLoad
 */

 interface TestParams {
  testTitle: string;
  testComment: string;
  testConfig: ImageProps;
}

// 通用测试用例
const commonTestCase:Array<TestParams> = [
  {
    testTitle: 'src - 网络地址',
    testComment: '图像来自网络地址',
    testConfig: {
      src: 'https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67',
      style: {
        height: 100
      }
    },
  },
  {
    testTitle: 'src - 本地1',
    testComment: '图像来自本地',
    testConfig: {
      src: miniIcon,
      style: {
        height: 100
      }
    },
  },
  {
    testTitle: 'src - 本地2',
    testComment: '图像来自本地，通过alias引入',
    testConfig: {
      src: img,
      style: {
        height: 100
      }
    },
  },
  {
    testTitle: 'mode - scaleToFill',
    testComment: '缩放模式「默认值」，不保持纵横比缩放图片，使图片的宽高完全拉伸填满image元素',
    testConfig: {
      src: img,
      style: {
        height: 100
      },
      mode: 'scaleToFill'
    },
  },
  {
    testTitle: 'mode - aspectFit',
    testComment: '缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来',
    testConfig: {
      src: img,
      style: {
        height: 100
      },
      mode: 'aspectFit'
    },
  },
  {
    testTitle: 'mode - aspectFill',
    testComment: '缩放模式，保持纵横比缩放图片，只保证短边能完全显示出来',
    testConfig: {
      src: img,
      style: {
        height: 100
      },
      mode: 'aspectFill'
    },
  },
  {
    testTitle: 'mode - widthFix',
    testComment: '缩放模式，宽度不变，高度自动变化，保持原图宽高比不变',
    testConfig: {
      src: img,
      style: { // 其实此时设置高度已经没用了
        height: 100
      },
      mode: 'widthFix'
    },
  },
  {
    testTitle: 'onError',
    testComment: '加载一个不存在的地址时，会触发onError',
    testConfig: {
      src: 'http://www.baidu.com',
      style: {
        height: 100
      },
      onError: (e) => Taro.showToast({
        title: '加载失败：'+JSON.stringify(e)
      })
    },
  },
  {
    testTitle: 'onLoad',
    testComment: '加载一个图片时，会触发onLoad',
    testConfig: {
      src: img,
      style: {
        height: 100
      },
      onLoad: (e) => alert('加载中：'+JSON.stringify(e))
    },
  },
]

export default class Index extends Component {

  constructor(props){
    super(props)
    this.state = {
      height: 0,
      width: 0
    }
  }

  render () {
    return (
      <View>
        <View className='test-item'>
          <View className='components-page'>
            {commonTestCase.map((item)=>{
              return (
                <View className='test-item' key={item.testTitle}>
                  <View className="test-block-hd">
                    <Text className="test-block-hd__text"> —— {item.testTitle} —— </Text>
                  </View>
                  <View className="test-block-bd">
                    <View className='components-page'>
                    <Text style="padding-bottom: 10px">{item.testComment}</Text>
                      <Image {...item.testConfig} />
                    </View>
                  </View>
                </View>
              )
            })}
            <View className='test-item'>
              <View className="test-block-hd">
                <Text className="test-block-hd__text"> —— 调试专用 —— </Text>
              </View>
              <View className="test-block-bd">
                <View className='components-page'>
                  <Text style="padding-bottom: 10px">图像宽{this.state.width}px, 高{this.state.height}px</Text>
                  <Image 
                    src="https://wx.qlogo.cn/mmhead/Q3auHgzwzM5YgORGicr7hLS5tuYno7QWuibt0fTFo1nJYZInMqUWN6SA/64" 
                    mode='widthFix'
                    onError={(e)=> Taro.showModal({
                      content: `报错啦：${JSON.stringify(e)}`
                    })}
                    onLoad={(e) => {
                      this.setState({
                        height: e?.detail?.height,
                        width: e?.detail?.width,
                      })
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
