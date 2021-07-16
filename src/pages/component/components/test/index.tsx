import React, { Component } from 'react'
import { Text } from '@tarojs/components'
import styles from './index.module.scss'

export default class Tab extends Component {
  render () {
    const textClass = styles.active;
    return (
      // <Text className={styles.active}>Hello</Text>
      <Text className={textClass}>Hello</Text>
    )
  }
}