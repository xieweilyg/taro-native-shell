import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View, Text } from '@tarojs/components'
import { ScrollViewProps } from '@tarojs/components/types/ScrollView'
import './index.scss'

// 安卓ScrollView内的ScrollView无法在竖直方向上滑动
// enableBackToTop 目前仅支持ios，不支持安卓

/**
  'style',
  'scrollX',
  'upperThreshold',
  'lowerThreshold',
  'scrollTop',
  'scrollLeft',
  'scrollWithAnimation',
  'enableBackToTop', // 注意这个只支持竖向 
  'onScrollToUpper',
  'onScrollToLower',
  'onScroll',
 */

interface TestParams {
  testTitle: string;
  testComment: string;
  testConfig: ScrollViewProps;
  testContext?: any;
}

const showEventParams = (event)=>Taro.showToast({
  title: `事件参数：${JSON.stringify(event)}`,
  icon: 'none',
  duration: 2000
})

const content = '这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，这是一段文字，'

export default class Index extends Component {
  constructor(props){
    super(props)
    this.state = {
      posX: '',
      posY: '',
    }
  }
  // 通用测试用例
  commonTestCase:Array<TestParams> = [
  {
    testTitle: 'scrollTop & scrollWithAnimation',
    testComment: '竖直方向区域自动定位到中间的部分，有过渡动画',
    testConfig: {
      scrollWithAnimation: true,
      scrollTop: 40,
    },
    testContext: Array.from(new Array(10).keys()).slice(-9).map((item)=>(`${item}、这是一段文字\n`))
  },
  {
    testTitle: 'scrollLeft & scrollWithAnimatio',
    testComment: '横向区域自动定位到中间的部分，有过渡动画',
    testConfig: {
      scrollX: true,
      scrollWithAnimation: true,
      scrollLeft: 300,
    },
    testContext: Array.from(new Array(10).keys()).slice(-9).map((item)=>(`${item}、这是一段文字；`))
  },
  {
    testTitle: 'style',
    testComment: '黄色区域，默认竖直方向滚动',
    testConfig: {
      style:{
        backgroundColor: 'yellow',
      }
    },
  },
  {
    testTitle: 'scrollX',
    testComment: '区域可以横向滚动',
    testConfig: {
      scrollX: true
    },
  },
  {
    testTitle: 'upperThreshold & onScrollToUpper',
    testComment: '距离顶部10px时，弹出提示框',
    testConfig: {
      upperThreshold: 10,
      onScrollToUpper: showEventParams
    },
  },
  {
    testTitle: 'upperThreshold & onScrollToUpper',
    testComment: '距离左边20px时，弹出提示框',
    testConfig: {
      scrollX: true,
      upperThreshold: 20,
      onScrollToUpper: showEventParams
    },
  },
  {
    testTitle: 'lowerThreshold & onScrollToLower',
    testComment: '距离底部10px时，弹出提示框',
    testConfig: {
      lowerThreshold: 10,
      onScrollToLower: showEventParams
    },
  },
  {
    testTitle: 'lowerThreshold & onScrollToLower',
    testComment: '距离右边20px时，弹出提示框',
    testConfig: {
      scrollX: true,
      lowerThreshold: 20,
      onScrollToLower: showEventParams
    },
  },
  {
    testTitle: 'scrollTop',
    testComment: '竖直方向区域自动定位到中间的部分（无动画）',
    testConfig: {
      scrollTop: 40,
    },
    testContext: Array.from(new Array(10).keys()).slice(-9).map((item)=>(`${item}、这是一段文字\n`))
  },
  {
    testTitle: 'scrollLeft',
    testComment: '横向区域自动定位到中间的部分（无动画）',
    testConfig: {
      scrollX: true,
      scrollLeft: 300,
    },
    testContext: Array.from(new Array(10).keys()).slice(-9).map((item)=>(`${item}、这是一段文字；`))
  },
  {
    testTitle: 'onScroll',
    testComment: `竖直方向滚动时，更新坐标值`,
    testConfig: {
      onScroll: (event) => {
        this.setState({
          posY: event.detail
        })
        Taro.showToast({
          title: JSON.stringify(this.state.posY),
          icon: 'none',
          duration: 2000
        })
      }
    },
    testContext: Array.from(new Array(10).keys()).slice(-9).map((item)=>(`${item}、这是一段文字\n`))
  },
  {
    testTitle: 'onScroll & scrollX',
    testComment: `横向滚动时，更新坐标值`,
    testConfig: {
      scrollX: true,
      onScroll: (event) => {
        this.setState({
          posX: event.detail
        })
        Taro.showToast({
          title: JSON.stringify(this.state.posX),
          icon: 'none',
          duration: 2000
        })
      }
    },
    testContext: Array.from(new Array(10).keys()).slice(-9).map((item)=>(`${item}、这是一段文字；`))
  },
]

  render () {
    return (
      <ScrollView
        enableBackToTop
        lowerThreshold={10}
        onScrollToLower={()=>Taro.showToast({
          title: '到底喽~',
          icon: 'none',
          duration: 2000
        })}
      >
        <View className='test-item'>
        {this.commonTestCase.map(item=>
          <View className='test-item' key={item.testComment}>
            <View className="test-block-hd">
              <Text className="test-block-hd__text"> —— {item.testTitle} —— </Text>
            </View>
            <View className="test-block-bd">
              <View className='components-page'>
              <Text style="padding-bottom: 10px">{item.testComment}</Text>
                <ScrollView className='one-block blue-block' {...item.testConfig}>
                  <Text className="center-text">{item.testContext ?? content}</Text>
                </ScrollView>
              </View>
            </View>
          </View>
        )}
        </View>
      </ScrollView>
    )
  }
}
