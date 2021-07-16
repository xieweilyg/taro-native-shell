import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  constructor(props){
    super(props)
    this.state = {
      cuurentAuthority: null,
    }
  }

  componentDidMount () { 
    alert('这个页面最好配合debug看')
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Button className="one-block" onClick={
          ()=>{
            Taro.getSetting({
              success: function (res) {
                console.log('getSetting成功',res)
                alert(JSON.stringify(res.authSetting))
              },
              fail: function (res) {
                console.log('getSetting失败',res)
              },
              complete: function (res) {
                console.log('getSetting完成',res)
              }
            })
          
          }
        }>获取权限设置</Button>

        <Button type="primary" className="one-block" onClick={
          ()=>{
            Taro.openSetting({
              success: function (res) {
                console.log('openSetting成功',res)
              },
              fail: function (res) {
                console.log('openSetting失败',res)
              },
              complete: function (res) {
                console.log('openSetting完成',res)
              }
            })
          
          }
        }>打开权限设置</Button>

        <Button type="warn" className="one-block" onClick={
          ()=>{
            Taro.authorize({
              scope:'scope.record',
              success: function (res) {
                console.log('authorize成功',res)
              },
              fail: function (res) {
                console.log('authorize失败',res)
              },
              complete: function (res) {
                console.log('authorize完成',res)
              }
            })
          
          }
        }>请求录音权限</Button>
        <Button type="warn" className="one-block" onClick={
          ()=>{
            Taro.authorize({
              scope:'scope.userLocation',
              success: function (res) {
                console.log('authorize成功',res)
              },
              fail: function (res) {
                console.log('authorize失败',res)
              },
              complete: function (res) {
                console.log('authorize完成',res)
              }
            })
          
          }
        }>请求位置信息权限</Button>
        <Button type="warn" className="one-block" onClick={
          ()=>{
            Taro.authorize({
              scope:'scope.writePhotosAlbum',
              success: function (res) {
                console.log('authorize成功',res)
              },
              fail: function (res) {
                console.log('authorize失败',res)
              },
              complete: function (res) {
                console.log('authorize完成',res)
              }
            })
          
          }
        }>请求存储权限</Button>
        <Button type="warn" className="one-block" onClick={
          ()=>{
            Taro.authorize({
              scope:'scope.camera',
              success: function (res) {
                console.log('authorize成功',res)
              },
              fail: function (res) {
                console.log('authorize失败',res)
              },
              complete: function (res) {
                console.log('authorize完成',res)
              }
            })
          
          }
        }>请求相机权限</Button>
      </View>
    )
  }
}
