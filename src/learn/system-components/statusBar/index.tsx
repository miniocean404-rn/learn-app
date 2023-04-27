import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const SystemStatusBar = () => {
  useEffect(() => {
    StatusBar.setBarStyle('dark-content')
    StatusBar.setBackgroundColor('#00000000')
    StatusBar.setHidden(true)
    StatusBar.setTranslucent(true)

    return () => {}
  }, [])

  return (
    <SafeAreaView>
      <StatusBar
        // 这个属性针对的是状态栏的文字及图标的黑色和白色
        barStyle={'dark-content'}
        // 状态栏背景颜色 #xx 英文
        backgroundColor={'#00000000'}
        // 状态栏的 颜色 改变后是否使用动画切换，渐隐渐显的效果
        animated
        // 屏幕的整个内容从哪里开始， true，从状态栏开始（整个屏幕的最顶端），false 状态栏下方开始
        translucent={false}
        // 是否隐藏状态栏
        hidden={false}
      />
      <Text>11111111</Text>
    </SafeAreaView>
  )
}

export default SystemStatusBar
