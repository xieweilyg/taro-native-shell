import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View, Icon, Text } from '@tarojs/components'
import { IconProps } from '@tarojs/components/types/Icon'
import './index.scss'

interface TestParams {
  testTitle: string;
  testComment: string;
  testConfig: IconProps;
}

// 通用测试用例
const commonTestCase:Array<TestParams> = [
  {
    testTitle: 'success',
    testComment: '成功图标，默认23px，默认颜色',
    testConfig: {
      type: "success"
    },
  },
  {
    testTitle: 'success',
    testComment: '成功图标，黑色',
    testConfig: {
      type: "success",
      color: 'black'
    },
  },
  {
    testTitle: 'success',
    testComment: '成功图标，设置60px，紫色',
    testConfig: {
      type: "success",
      size: '60',
      color: '#9714d8'
    },
  },
  {
    testTitle: 'success_no_circle',
    testComment: '成功图标，无圈圈',
    testConfig: {
      type: "success_no_circle",
      size: '60',
    },
  },
  {
    testTitle: 'info',
    testComment: '信息图标',
    testConfig: {
      type: "info",
      size: '60',
    },
  },
  {
    testTitle: 'warn',
    testComment: '警告图标',
    testConfig: {
      type: "warn",
      size: '60',
    },
  },
  {
    testTitle: 'waiting',
    testComment: '等待图标',
    testConfig: {
      type: "waiting",
      size: '60',
    },
  },
  {
    testTitle: 'cancel',
    testComment: '取消图标',
    testConfig: {
      type: "cancel",
      size: '60',
    },
  },
  {
    testTitle: 'download',
    testComment: '下载图标',
    testConfig: {
      type: "download",
      size: '60',
    },
  },
  {
    testTitle: 'search',
    testComment: '搜索图标',
    testConfig: {
      type: "search",
      size: '60',
    },
  },
  {
    testTitle: 'clear',
    testComment: '清除图标',
    testConfig: {
      type: "clear",
      size: '60',
    },
  },
]

export default class Index extends Component {

  render () {
    return (
      <ScrollView>
        <View className='test-item'>
          <View className='components-page'>
            {commonTestCase.map((item)=>(
              <View className='test-item' key={item.testComment}>
              <View className="test-block-hd">
                <Text className="test-block-hd__text"> —— {item.testTitle} —— </Text>
              </View>
              <View className="test-block-bd">
                <View className='components-page'>
                <Text style="padding-bottom: 10px">{item.testComment}</Text>
                  <Icon {...item.testConfig} />
                </View>
              </View>
            </View>
            ))}
          </View>
        </View>
      </ScrollView>
    )
  }
}
