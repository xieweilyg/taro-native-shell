import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

const initPageList = [
  {
    type: '视图容器',
    list: [
      {
        componentType: 'View',
        url: 'view',
      },
      {
        componentType: 'ScrollView',
        url: 'scrollview',
      },
      {
        componentType: 'Swiper',
        url: 'swiper',
      },
      {
        componentType: 'MovableView',
        url: 'movableview',
      },
      {
        componentType: 'VirtualList',
        url: 'virtualList',
      },
    ]
  },
  {
    type: '基础内容',
    list: [
      {
        componentType: 'Icon',
        url: 'icon',
      },
      {
        componentType: 'Text',
        url: 'text',
      },
      {
        componentType: 'Progress',
        url: 'progress',
      },
      {
        componentType: 'RichText',
        url: 'richText',
      },
    ]
  },
  {
    type: '表单组件',
    list: [
      {
        componentType: 'Button',
        url: 'button',
      },
      {
        componentType: 'Checkbox',
        url: 'checkbox',
      },
      {
        componentType: 'Form',
        url: 'form',
      },
      {
        componentType: 'Textarea',
        url: 'textarea',
      },
      {
        componentType: 'Input',
        url: 'input',
      },
      {
        componentType: 'Picker',
        url: 'picker',
      },
    ]
  },
  {
    type: '媒体组件',
    list: [
      {
        componentType: 'Image',
        url: 'image',
      },
      {
        componentType: 'Video',
        url: 'video',
      },
      {
        componentType: 'Camera',
        url: 'camera',
      },
    ]
  },
  {
    type: '开放能力',
    list: [
      {
        componentType: 'Webview',
        url: 'webview',
      },
      {
        componentType: '随便测测',
        url: 'test',
      },
    ]
  },
];

interface pageItem {
  componentType: string;
  url: string;
}

interface typeItem {
  type: string;
  list: Array<pageItem>;
}

interface IComponentState {
  pageList: Array<typeItem>;
  currentType: string;
  componentEntries: Array<pageItem>;
}

export default class Index extends Component<{}, IComponentState> {

  constructor(props){
    super(props);
    this.state = {
      pageList: initPageList,
      currentType: initPageList[0].type,
      componentEntries: initPageList[0].list,
    }
  }

  componentDidMount () {
    console.log('组件 componentDidMount')
  }

  componentWillUnmount () {
    console.log('组件 componentWillUnmount')
  }

  componentDidShow () {
    console.log('组件 componentDidShow')
  }

  componentDidHide () {
    console.log('组件 componentDidHide')
  }

  handleTypeClk(clkType){
    if (clkType){
      const targetItem = this.state.pageList.find((item)=>item.type===clkType)
      if(targetItem){
        this.setState({
          currentType: targetItem?.type,
          componentEntries: targetItem?.list
        })
      }else{
        alert('程序出错')
      }
    }
  }
  handlePageClk(url){
    Taro.navigateTo({url:`pages/component/components/${url}/index`})
  }

  render () {
    return (
      <View className='view-content-bd'>
        <View className="view-left">
          {this.state?.pageList.map((item) =>{
            return <View className="view-left__item" key={item.type} onClick={() => this.handleTypeClk(item.type)}>
              <Text className="text-conent">{item.type}</Text>
            </View>
          })}
        </View>
        <View className="view-right">
          {this.state.componentEntries.length ? this.state.componentEntries.map(item=>{
            return <View className="view-right__item" key={item.componentType} onClick={() => this.handlePageClk(item.url)}>
            <Text className="text-conent">{item.componentType}</Text>
          </View>
          }): null}
        </View>
        
      </View>
    )
  }
}
