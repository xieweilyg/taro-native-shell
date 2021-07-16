import React from 'react'
import { 
  Button, 
  ScrollView,
} from '@tarojs/components'
import { navigateTo } from '@tarojs/taro'
import './index.scss'

/**
 * src
 */


export default class Index extends React.Component {
  render () {
    return (
      <ScrollView>
        <Button 
          className="btn" 
          onClick={()=>navigateTo({url: 'pages/component/components/webview/innerPage/webview-nostyle/index'})}
          >不设置宽高的webview</Button>
        <Button
          className="btn"
          onClick={()=>navigateTo({url: 'pages/component/components/webview/innerPage/webview-set-height/index'})}
          >设置高度的webview</Button>
          <Button
          className="btn"
          onClick={()=>navigateTo({url: 'pages/component/components/webview/innerPage/webViewBox/index'})}
          >函数组件的webview</Button>
      </ScrollView>
    )
  }
}
