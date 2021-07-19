import React, { Component } from 'react'
import { ScrollView, View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <ScrollView className='view-content'>
        <View className="view-item">
            <Text className="view-text">界面
            </Text>
          </View>
      </ScrollView>
    )
  }
}
