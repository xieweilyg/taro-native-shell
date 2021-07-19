import { Component } from 'react'
import { WebView } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleMessage() {
    alert('I got a message')
  }
  handleError(e) {
    console.log('I got a error', e);
  }
  handleLoadStart(e) {
    console.log('start', e);
  }

  render () {
    return (
      <WebView
          src='https://www.baidu.com/'
          onMessage={this.handleMessage}
          onLoad={this.handleLoadStart}
          onError={this.handleError}
        />
    )
  }
}
