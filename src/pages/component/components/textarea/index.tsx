import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { Textarea, View, Text, Button } from '@tarojs/components'
// import { ViewProps } from '@tarojs/components/types/View'
import './index.scss'

// interface TestParams {
//   testTitle: string;
//   testComment: string;
//   testConfig: ViewProps;
// }

// // 通用测试用例
// const commonTestCase:Array<TestParams> = [
//   {
//     testTitle: 'hoverStyle',
//     testComment: '按下去时区域会变色',
//     testConfig: {
//       hoverStyle: {backgroundColor: 'red'}
//     },
//   },
//   {
//     testTitle: 'hoverStartTime',
//     testComment: '按下去2秒后才会变色',
//     testConfig: {
//       hoverStyle: {backgroundColor: 'red'},
//       hoverStartTime:2000
//     },
//   },
//   {
//     testTitle: 'hoverStayTime',
//     testComment: '按下去后变色会持续较长时间',
//     testConfig: {
//       hoverStyle: {backgroundColor: 'red'},
//       hoverStayTime:2000
//     },
//   },
// ]

export default class Index extends Component {

  render () {
    return (
      <View className='components-page'>
        <Text>输入区域高度自适应，不会出现滚动条</Text>
        <Textarea style='background:#fff;width:100%;min-height:580px;padding:0 30px;' autoHeight/>
        <Text>这是一个可以自动聚焦的 textarea</Text>
        <Textarea style='background:#fff;width:100%;height:80px;padding:0 30px;' autoFocus/>
      </View>
    )
  }
}
