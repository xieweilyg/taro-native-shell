import React, { Component } from 'react'
import { View, Text, Picker } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  state = {
    selector: ['美国', '中国', '巴西', '日本'],
    selectorChecked: '美国',
    timeSel: '12:01',
    dateSel: '2018-04-22'
  }

  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }

  onTimeChange = e => {
    this.setState({
      timeSel: e.detail.value
    })
  }
  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
  }

  render () {
    return (
      <View className='container'>
        <View className='page-body'>
          <View className='page-section'>
            <Text>地区选择器</Text>
            <View>
              <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
                <View className='picker'>
                <Text>当前选择：{this.state.selectorChecked}</Text>
                </View>
              </Picker>
            </View>
          </View>
          <View className='page-section'>
            <Text>时间选择器</Text>
            <View>
              <Picker mode='time' value={this.state.timeSel} onChange={this.onTimeChange}>
                <View className='picker'>
                <Text>当前选择：{this.state.timeSel}</Text>
                </View>
              </Picker>
            </View>
          </View>
          <View className='page-section'>
            <Text>日期选择器</Text>
            <View>
              <Picker mode='date' value={this.state.dateSel} onChange={this.onDateChange}>
                <View className='picker'>
                <Text>当前选择：{this.state.dateSel}</Text>
                </View>
              </Picker>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
