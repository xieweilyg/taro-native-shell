import React, { Component } from 'react'
import { 
  ScrollView, 
  View, 
  Text, 
  MovableArea,
  MovableView,
} from '@tarojs/components'
import './index.scss'

/**
 * value
 * disabled
 * checked
 * color
 * onChange
 */


export default class Index extends Component {

  constructor(props){
    super(props)
    this.state = {
      checkItems: [
        {
          value: "china",
          text: "中国",
          checked: true,
          color: '#ff0000'
        },
        {
          value: "111",
          text: "我家",
          checked: true,
          color: '#0000ff'
        },
        {
          value: "222",
          text: "英国",
          checked: false,
        },
        {
          value: "USA",
          text: "漂亮国",
          checked: false,
        },
        {
          value: "franch",
          text: "发国",
          checked: true,
          disabled: true,
        },
        {
          value: "aoCuntry",
          text: "澳村",
          checked: false,
        },
      ]
    }
  }

  render () {
    return (
      <View>
        <View className='test-item'>
          <View className='components-page'>
            <View className='test-item'>
              {/* <View className="test-block-hd">
                <Text className="test-block-hd__text"> —— 测试 —— </Text>
              </View> */}
              <View className="test-block-bd">
                <View className='components-page'>
                {/* <Text style="padding-bottom: 10px">测试看看</Text> */}
                <MovableArea className="movable-area">
                  <MovableView className="movable-view">默认不移动</MovableView>
                </MovableArea>
                <MovableArea className="movable-area">
                  <MovableView className="movable-view" direction="all" style={{ backgroundColor: 'white', color: 'yellow' }}>
                    direction: 'all'
                  </MovableView>
                </MovableArea>
                <MovableArea className="movable-area">
                  <MovableView className="movable-view" direction="horizontal">
                    direction: 'horizontal'
                  </MovableView>
                </MovableArea>
                <MovableArea className="movable-area">
                  <MovableView className="movable-view" direction="vertical">
                    direction: 'vertical'
                  </MovableView>
                </MovableArea>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
