import React, { Component } from 'react'
import { ScrollView, View, Text } from '@tarojs/components'
import { ViewProps } from '@tarojs/components/types/View'
import './index.scss'

interface TestParams {
  testTitle: string;
  testComment: string;
  testConfig: ViewProps;
}

// 通用测试用例
const commonTestCase:Array<TestParams> = [
  {
    testTitle: 'hoverStyle',
    testComment: '按下去时区域会变色',
    testConfig: {
      hoverStyle: {backgroundColor: 'red'}
    },
  },
  {
    testTitle: 'hoverStartTime',
    testComment: '按下去2秒后才会变色',
    testConfig: {
      hoverStyle: {backgroundColor: 'red'},
      hoverStartTime:2000,
      hoverStayTime:2000
    },
  },
  {
    testTitle: 'hoverStayTime',
    testComment: '按下去后变色会持续较长时间',
    testConfig: {
      hoverStyle: {backgroundColor: 'red'},
      hoverStayTime:2000
    },
  },
]

export default class Index extends Component {

  componentDidMount () {
    console.log('View componentDidMount')
  }

  componentWillUnmount () {
    console.log('View componentWillUnmount')
  }

  componentDidShow () {
    console.log('View componentDidShow')
  }

  componentDidHide () {
    console.log('View componentDidHide')
  }

  render () {
    return (
      <ScrollView>
        <View className='test-item'>
          <View className="test-block-hd">
            <Text className="test-block-hd__text"> —— 官网用例 —— </Text>
          </View>
          <View className="test-block-bd">
            <View className='components-page'>
            <Text>flex-direction: row 横向布局</Text>
              <View className='flex-wrp' style='flex-direction:row;'>
                <View className='flex-item demo-text-1'/>
                <View className='flex-item demo-text-2'/>
                <View className='flex-item demo-text-3'/>
              </View>
              <Text>flex-direction: column 纵向布局</Text>
              <View className='flex-wrp' style='flex-direction:column;'>
                <View className='flex-item flex-item-V demo-text-1'/>
                <View className='flex-item flex-item-V demo-text-2'/>
                <View className='flex-item flex-item-V demo-text-3'/>
              </View>
            </View>
          </View>
        </View>

        {commonTestCase.map(item=>
          <View className='test-item' key={item.testComment}>
            <View className="test-block-hd">
              <Text className="test-block-hd__text"> —— {item.testTitle} —— </Text>
            </View>
            <View className="test-block-bd">
              <View className='components-page'>
              <Text style="padding-bottom: 10px">{item.testComment}</Text>
                <View className='one-block blue-block' {...item.testConfig}>
                  <Text className="center-text">点击试试</Text>
                </View>
              </View>
            </View>
          </View>
          )}

          <View className='test-item'>
            <View className="test-block-hd">
              <Text className="test-block-hd__text"> —— 可调试用例 —— </Text>
            </View>
            <View className="test-block-bd">
              <View className='components-page' hoverStyle={{backgroundColor: '#888'}}>
                <View className='one-block blue-block'
                style={{margin: 30}}
                  hoverStyle={{backgroundColor: '#fff'}}
                >
                  <Text className="center-text">点击试试</Text>
                </View>
              </View>
            </View>
          </View>

      </ScrollView>
    )
  }
}
