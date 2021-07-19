import React, { Component } from 'react'
import { ScrollView, View, Text, Progress } from '@tarojs/components'
import { ProgressProps } from '@tarojs/components/types/Progress'
import './index.scss'

/**
 * percent
 * showInfo
 * strokeWidth
 * activeColor
 * backgroundColor
 * active
 * activeMode 这个用我的demo看比较直观
 */

interface TestParams {
  testTitle: string;
  testComment: string;
  testConfig: ProgressProps;
}

export default class Index extends Component {

  constructor(props){
    super(props)
    this.state = {
      addProcess: 0,
    }
  }

  componentDidMount(){
    setInterval(()=>{
      if(this.state.addProcess<100) {
        this.setState({
          addProcess: this.state.addProcess + 1
        })
      }
    }, 500)
  }

  // 通用测试用例
commonTestCase:Array<TestParams> = [
  {
    testTitle: '无任何参数',
    testComment: '没有任何进度，灰灰的一条',
    testConfig: {
    },
  },
  {
    testTitle: 'showInfo',
    testComment: '显示进度百分比',
    testConfig: {
      showInfo: true,
      percent: 10,
    },
  },
  {
    testTitle: 'strokeWidth',
    testComment: '很宽的进度条',
    testConfig: {
      showInfo: true,
      percent: 10,
      strokeWidth: 20
    },
  },
  {
    testTitle: 'activeColor & backgroundColor',
    testComment: '进度条的颜色为蓝色，背景色为粉色',
    testConfig: {
      showInfo: true,
      percent: 10,
      activeColor: 'blue',
      backgroundColor: '#ecb2da'
    },
  },
  {
    testTitle: 'active',
    testComment: '重新加载时有动画哦',
    testConfig: {
      active: true,
      percent: 80,
    },
  },
]

  render () {
    return (
      <ScrollView>
        <View className='test-item'>
          <View className="test-block-hd">
            <Text className="test-block-hd__text"> —— 官网用例 —— </Text>
          </View>
          <View className="test-block-bd">
            <View className='components-page'>
              <Progress className="progress-item" percent={20} showInfo strokeWidth={2} />
              <Progress className="progress-item" percent={40} strokeWidth={2} active />
              <Progress className="progress-item" percent={60} strokeWidth={2} active />
              <Progress className="progress-item" percent={80} strokeWidth={2} active activeColor='blue' />
            </View>
          </View>
        </View>

        <View className='test-item'>
          <View className="test-block-hd">
            <Text className="test-block-hd__text"> —— 调试用例 —— </Text>
          </View>
          <View className="test-block-bd">
            <View className='components-page'>
              <Progress
                className="progress-item" 
                percent={this.state.addProcess} 
                showInfo 
                strokeWidth={10}
                // active
                // activeMode="backwards"
              />
            </View>
          </View>
        </View>

        <View className='test-item'>
          <View className='components-page'>
            {this.commonTestCase.map((item)=>(
              <View className='test-item' key={item.testComment}>
              <View className="test-block-hd">
                <Text className="test-block-hd__text"> —— {item.testTitle} —— </Text>
              </View>
              <View className="test-block-bd">
                <View className='components-page'>
                <Text style="padding-bottom: 10px">{item.testComment}</Text>
                  <Progress {...item.testConfig} />
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
