import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { 
  ScrollView, 
  View, 
  Text, 
  Input,
  Label,
  Form, 
  Button, 
  Radio,
  RadioGroup
} from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  constructor(props){
    super(props)
    this.state = {
      inputValue: '',
      checkValue: 'female'
    }
  }

  render () {
    return (
      <ScrollView>
        <View className='test-item'>
          <View className='components-page'>
              <View className='test-item'>
                  <View className="test-block-hd">
                    <Text className="test-block-hd__text"> —— 表单 —— </Text>
                  </View>
                  <View className="test-block-bd">
                    <View className='components-page'>
                    <Text style="padding-bottom: 10px">多个表单组件共同使用</Text>
                      <Form
                        onSubmit={(e)=>
                          Taro.showToast({
                              title: JSON.stringify(this.state),
                              icon: 'none',
                              duration: 3000
                            })} 
                        onReset={(e)=>
                          Taro.showToast({
                              title: JSON.stringify(e),
                              icon: 'none',
                              duration: 3000
                            })} >
                        <View className="test-block-bd" style={{margin: 20}}>
                          <Input
                            type="text"
                            placeholder="最大输入长度为10"
                            maxLength={-1}
                            onInput={(e)=> this.setState({inputValue:e.target.value})}
                          />
                        </View>
                        <View style={{margin: 20}}>
                        <RadioGroup name='checkbox' onChange={(e)=>this.setState({checkValue: e.detail.value})}>
                          <Label className='checkbox-list__label' for={"1"} key={"1"}>
                            <Radio className='checkbox-list__checkbox' value={"female"} checked={this.state.checkValue==="female"}>{ " 女"}</Radio>
                          </Label>
                          <Label className='checkbox-list__label' for={"2"} key={"2"}>
                            <Radio className='checkbox-list__checkbox' value={"male"} checked={this.state.checkValue==="male"}>{ " 男"}</Radio>
                          </Label>
                          </RadioGroup>
                        </View>
                        <Button formType="submit" type="primary">
                          Submit
                        </Button>
                        <Button formType="reset" type="default">
                          Reset
                        </Button>
                      </Form>
                    </View>
                  </View>
                </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}
