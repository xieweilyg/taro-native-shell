import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { Swiper, View, Text, Button, SwiperItem } from '@tarojs/components'
import { SwiperProps } from '@tarojs/components/types/Swiper'
import './index.scss'
// 当前页用例未补充完全
/**
 * indicatorDots
 * indicatorColor
 * indicatorActiveColor
 * autoplay
 * current
 * interval
 * circular
 * vertical
 * onChange
 * onAnimationFinish
 */


interface TestParams {
  testTitle: string;
  testComment: string;
  testConfig: SwiperProps;
}

// 通用测试用例
const commonTestCase:Array<TestParams> = [
  {
    testTitle: '默认',
    testComment: '不显示面板指示点，不自动切换，从第一个滑块开始显示',
    testConfig: {
    },
  },
]

export default class Index extends Component {

  constructor(props){
    super(props)
    this.state = {
      current: 0,
    }
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
        <View className='test-item'>
          <View className="test-block-hd">
            <Text className="test-block-hd__text"> —— 官网用例 —— </Text>
          </View>
          <Swiper
            current={this.state.current}
            className='test-h'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            vertical
            circular
            indicatorDots
            autoplay>
            <SwiperItem>
              <View className='demo-text-1'>1</View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text-2'>2</View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text-3'>3</View>
            </SwiperItem>
          </Swiper>
        </View>
        <View>
          <Button onClick={()=>this.setState({
            current: 0
          })}>切换到1</Button>
          <Button onClick={()=>this.setState({
            current: 1
          })}>切换到2</Button>
          <Button onClick={()=>this.setState({
            current: 2
          })}>切换到3</Button>
        </View>

        {commonTestCase.map(item=>
          <View className='test-item' key={item.testComment}>
            <View className="test-block-hd">
              <Text className="test-block-hd__text"> —— {item.testTitle} —— </Text>
            </View>
            <View className="test-block-bd">
              <View className='components-page'>
                <Text style="padding-bottom: 10px">{item.testComment}</Text>
                <Swiper
                  {...item.testConfig}
                  className='test-h'
                  style={{height: 100}}
                  >
                  <SwiperItem>
                    <View className='demo-text-1'>1</View>
                  </SwiperItem>
                  <SwiperItem>
                    <View className='demo-text-2'>2</View>
                  </SwiperItem>
                  <SwiperItem>
                    <View className='demo-text-3'>3</View>
                  </SwiperItem>
                </Swiper>
              </View>
            </View>
          </View>
          )}

        <View className='test-item'>
          <View className="test-block-hd">
            <Text className="test-block-hd__text"> —— 可调试用例 —— </Text>
          </View>
          <Swiper
            className='test-third'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            indicatorDots
            autoplay
            current={2}
            >
            <SwiperItem>
              <View className='demo-text-1'>1</View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text-2'>2</View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text-3'>3</View>
            </SwiperItem>
          </Swiper>
        </View>

      </View>
    )
  }
}
