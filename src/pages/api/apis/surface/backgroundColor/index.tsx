import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View,Text, Button, Switch } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount () { 
  }

  componentDidShow () { 
    Taro.setBackgroundColor({
      backgroundColor: '#000000',
      backgroundColorBottom:'#eeff22',
      success: ()=>console.log('setBackgroundColor success'),
      fail: ()=>console.log('setBackgroundColor fail'),
      complete: ()=>console.log('setBackgroundColor complete'),
    })
  }

  componentDidHide () { }

  handleClick(){

    // Taro.setBackgroundColor({
    //   backgroundColor: '',
    //   success: ()=>console.log('setBackgroundColor success'),
    //   fail: ()=>console.log('setBackgroundColor fail'),
    //   complete: ()=>console.log('setBackgroundColor complete'),
    // })
    
    Taro.startPullDownRefresh({
      success: ()=>console.log("pull down success"),
      fail: ()=>console.log("pull down fail"),
      complete: ()=>console.log("pull down complete"),
    })
    // 两秒后消失
    setTimeout(()=>{
      Taro.stopPullDownRefresh({
        success: ()=>console.log("stoppull down success"),
        fail: ()=>console.log("stoppull down fail"),
        complete: ()=>console.log("stoppull down complete"),
      })
    }, 2000)
    
  }

  handleIosChangeSwitch(val){
    Taro.setBackgroundTextStyle({
      textStyle: val.detail.value === true ? 'dark' : 'light',      
      success: ()=>console.log('setBackgroundTextStyle success'),
      fail: ()=>console.log('setBackgroundTextStyle fail'),
      complete: ()=>console.log('setBackgroundTextStyle complete'),
    })
  }

  handlePageScrollTo(){
    Taro.pageScrollTo({
      scrollTop: 100,
      duration: 3000,
      success: ()=>console.log("pageScrollTo success"),
        fail: ()=>console.log("pageScrollTo fail"),
        complete: ()=>console.log("pageScrollTo complete"),
    })
  }

  render () {
    
    return (
      <ScrollView>
        <Text className="elementContent">切换ios小圈圈颜色：</Text>
        
        <Switch className="elementContent" onChange={this.handleIosChangeSwitch.bind(this)}></Switch>
        
        <Button className="elementContent" onClick={this.handleClick.bind(this)}>点我下拉刷新</Button>
        
        <View style={{
          width: '100%', 
        height: 800, 
        backgroundColor: 'yellow',
        textAlign: 'center'
        }}>hahahah</View>

        <View id="scrollViewPosition">
          <Text>文字说明</Text>
        </View>

        <View style={{
          width: '100%', 
        height: 800, 
        backgroundColor: 'yellow',
        textAlign: 'center'
        }}>hahahah</View>

        <Button className="elementContent" onClick={this.handlePageScrollTo.bind(this)}>点我返回顶部</Button>
        

      </ScrollView>
    )
  }
}
