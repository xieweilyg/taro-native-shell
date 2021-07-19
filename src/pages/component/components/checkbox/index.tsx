import React, { Component } from 'react'
import { 
  ScrollView, 
  View, 
  Text, 
  Checkbox,
  Label,
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
    const { checkItems } = this.state;
    return (
      <ScrollView>
        <View className='test-item'>
          <View className='components-page'>
            <View className='test-item'>
              <View className="test-block-hd">
                <Text className="test-block-hd__text"> —— 测试 —— </Text>
              </View>
              <View className="test-block-bd">
                <View className='components-page'>
                <Text style="padding-bottom: 10px">测试看看</Text>
                  {
                    checkItems.map((item, index)=>(
                      <Label for={item.text} key={item.value}>
                        <Checkbox onChange={({checked})=>{
                          checkItems[index].checked = checked;
                          this.setState({
                            checkItems: [...checkItems]
                          })
                        }}
                        value={item.value} 
                        checked={item.checked} 
                        children={item.text}
                        color={item?.color || '#0f0'}
                        disabled={item?.disabled}
                        />
                      </Label>
                    ))
                  }
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}
