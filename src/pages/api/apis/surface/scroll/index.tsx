

import React, { Component } from 'react'
import Taro, { showModal } from '@tarojs/taro'
import { ScrollView, View, Text, Button } from '@tarojs/components'
import './index.scss'

/**
 * scrollTop
 * success
 * fail
 * complete
 */

export default class Index extends Component {

  componentDidMount () {
  }

  componentWillUnmount () { }

  componentDidShow () {
    Taro.pageScrollTo({
      scrollTop: 300,
    })
  }

  componentDidHide () { }

  render () {
    return (
      <ScrollView className='view-content'>
        <View className="view-item">

          <View style={{
            height: 800,
            backgroundColor: 'lightblue'
          }}>hahahah</View>

            <Button onClick={()=> Taro.pageScrollTo({
              scrollTop: 1200,
            })}>pageScrollTo</Button>

          <View style={{
            height: 800,
            backgroundColor: 'lightpink'
          }}>xixixixi</View>


          <View style={{
            height: 800,
            backgroundColor: 'lightyellow'
          }}>mmmmmm</View>
            
          </View>
      </ScrollView>
    )
  }
}
