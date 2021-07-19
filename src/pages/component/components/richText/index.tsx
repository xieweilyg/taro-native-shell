import React from 'react'
import { 
  RichText, 
  View, 
  Text, 
} from '@tarojs/components'
import './index.scss'


export default class Index extends React.Component {

  render () {
    return (
      <View>
        <View className='test-item'>
          <View className='components-page'>
            <View className='test-item'>
              <View className="test-block-hd">
                <Text className="test-block-hd__text"> —— 测试 —— </Text>
              </View>
              <View className="test-block-bd">
                <View className='components-page'>
                <RichText className='rich-text' nodes={[
                  {
                    name: "div",
                    attrs: {
                      class: "div_class",
                      style: `
                        line-height: 60px;
                        color: white;
                        font-size: 60px;
                      `
                    },
                    children: [
                      {
                        type: "text",
                        text: "Hello World!"
                      }
                    ]
                  }
                ]}
                />
                  
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
