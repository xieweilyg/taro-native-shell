import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  AlertData(data){
    // Taro.showToast({
    //   title: JSON.stringify(data)
    // })
    console.log('1',data)
  }
  AlertData2(data){
    // Taro.showToast({
    //   title: JSON.stringify(data)
    // })
    console.log('2', data)
  }

  componentWillMount () { }

  componentDidMount () {
    
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () {
  }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Button type="primary" onClick={()=>{
          Taro.startGyroscope({
            interval: 'ui',
            success: () => console.log("startGyroscope success"),
            fail: () => console.log("startGyroscope fail"),
            complete: () =>console.log("startGyroscope complete"),
          })
        }}>开始监听</Button>
        <Button onClick={()=>{
          Taro.onGyroscopeChange(this.AlertData)
        }}>绑定监听事件A</Button>
        <Button type="primary" onClick={()=>{
          Taro.onGyroscopeChange(this.AlertData2)
        }}>绑定监听事件B</Button>
        <Button onClick={()=>{
          Taro.offGyroscopeChange(this.AlertData)
        }}>取消监听事件A</Button>
        <Button type="primary" onClick={()=>{
          Taro.offGyroscopeChange(this.AlertData2)
        }}>取消监听事件B</Button>
        <Button type="primary" onClick={()=>{
          Taro.offGyroscopeChange()
        }}>取消监听全部事件</Button>
        <Button type="warn" onClick={()=>{
          Taro.stopGyroscope({
            success: () => console.log("stopGyroscope success"),
            fail: () => console.log("stopGyroscope fail"),
            complete: () =>console.log("stopGyroscope complete"),
          })
        }}>取消监听</Button>

        <View style={{margin: 50}}>加速计</View>

<Button type="primary" onClick={()=>{
          Taro.startAccelerometer({
            interval: 'ui',
            success: () => console.log("start success"),
            fail: () => console.log("start fail"),
            complete: () =>console.log("start complete"),
          })
        }}>开始监听</Button>
        <Button onClick={()=>{
          Taro.onAccelerometerChange(this.AlertData)
        }}>绑定监听事件A</Button>
        <Button type="primary" onClick={()=>{
          Taro.onAccelerometerChange(this.AlertData2)
        }}>绑定监听事件B</Button>
        <Button onClick={()=>{
          Taro.offAccelerometerChange(this.AlertData)
        }}>取消监听事件A</Button>
        <Button type="primary" onClick={()=>{
          Taro.offAccelerometerChange(this.AlertData2)
        }}>取消监听事件B</Button>
        <Button type="primary" onClick={()=>{
          Taro.offAccelerometerChange()
        }}>取消监听全部事件</Button>
        <Button type="warn" onClick={()=>{
          Taro.stopAccelerometer({
            success: () => console.log("stop success"),
            fail: () => console.log("stop fail"),
            complete: () =>console.log("stop complete"),
          })
        }}>取消监听</Button>
      </View>
    )
  }
}
