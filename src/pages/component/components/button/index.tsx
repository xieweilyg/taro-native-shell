import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { 
  ScrollView, 
  View, 
  Text, 
  Button,
} from '@tarojs/components'
import { ButtonProps } from '@tarojs/components/types/Button'
import './index.scss'

/**
 * size
 * type
 * plain
 * disabled
 * loading
 * hoverStyle
 * hoverStartTime
 * hoverStayTime
 * onClick
 */

interface TestParams {
  testTitle: string;
  testComment: string;
  testConfig: ButtonProps;
}

// 通用测试用例
const commonTestCase:Array<TestParams> = [
  {
    testTitle: 'size - default',
    testComment: '按钮 - 默认大小',
    testConfig: {
      size: "default",
    },
  },
  {
    testTitle: 'size - mini',
    testComment: '按钮 - 小尺寸',
    testConfig: {
      size: "mini"
    },
  },
  {
    testTitle: 'type - default',
    testComment: '按钮 - 默认类型',
    testConfig: {
      type: "default"
    },
  },
  {
    testTitle: 'type - primary',
    testComment: '按钮 - primary类型',
    testConfig: {
      type: "primary"
    },
  },
  {
    testTitle: 'type - warn',
    testComment: '按钮 - 警告类型',
    testConfig: {
      type: "warn"
    },
  },
  {
    testTitle: 'plain - false',
    testComment: '按钮 - 不镂空',
    testConfig: {
      type: "primary",
      plain: false
    },
  },
  {
    testTitle: 'plain - true',
    testComment: '按钮 - 镂空',
    testConfig: {
      type: "primary",
      plain: true
    },
  },
  {
    testTitle: 'disabled - true',
    testComment: '按钮 - 禁用',
    testConfig: {
      type: "warn",
      disabled: true
    },
  },
  {
    testTitle: 'disabled - false',
    testComment: '按钮 - 不禁用',
    testConfig: {
      type: "warn",
      disabled: false
    },
  },
  {
    testTitle: 'loading - true',
    testComment: '按钮 - 加载中',
    testConfig: {
      type: "primary",
      loading: true
    },
  },
  {
    testTitle: 'hoverStyle - blue',
    testComment: '按钮 - 点击按钮时，按钮变为蓝色',
    testConfig: {
      type: "primary",
      hoverStyle: {
        backgroundColor: 'blue'
      }
    },
  },
  {
    testTitle: 'hoverStartTime - 2000ms',
    testComment: '按钮 - 点击按钮时，按住2秒后出现点击态',
    testConfig: {
      type: "primary",
      hoverStartTime: 2000,
      hoverStyle: {
        backgroundColor: 'blue'
      }
    },
  },
  {
    testTitle: 'hoverStayTime - 2000ms',
    testComment: '按钮 - 点击按钮时，按一次按钮，点击态维持2秒',
    testConfig: {
      type: "primary",
      hoverStyle: {
        backgroundColor: 'blue'
      },
      hoverStayTime: 2000
    },
  },
  {
    testTitle: 'hoverStartTime=1s, hoverStayTime=2s',
    testComment: '按钮 - 点击按钮时，按一次按钮，1秒后出现点击态，点击态维持2秒',
    testConfig: {
      type: "primary",
      hoverStyle: {
        backgroundColor: 'blue'
      },
      hoverStayTime: 2000,
      hoverStartTime: 1000,
    },
  },
  {
    testTitle: 'onClick - 点击事件',
    testComment: '按钮 - 点击按钮时，弹出点击成功toast',
    testConfig: {
      type: "primary",
      hoverStyle: {
        backgroundColor: 'blue'
      },
      onClick: () => {
        Taro.showToast({
          title: '你点击了按钮'
        })
      }
    },
  },
]

export default class Index extends Component {

  constructor(props){
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <ScrollView>
        <View className='test-item'>
          <View className='components-page'>
                {commonTestCase.map((item)=>{
                  return (
                    <View className='test-item' key={item.testTitle}>
                      <View className="test-block-hd">
                        <Text className="test-block-hd__text"> —— {item.testTitle} —— </Text>
                      </View>
                      <View className="test-block-bd">
                        <View className='components-page'>
                        <Text style="padding-bottom: 10px">{item.testComment}</Text>
                          <Button {...item.testConfig} className="btn-item">
                          按钮
                          </Button>
                        </View>
                      </View>
                    </View>
                  )
                })}
          </View>
          <Button
            type="warn"
            hoverStartTime={2000}
            hoverStyle={{
              backgroundColor: 'blue'
            }}
            plain={true}
          >
              点我看看
          </Button>
        </View>
      </ScrollView>
    )
  }
}
