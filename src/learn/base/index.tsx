import React, { useEffect, useRef } from 'react'
import { SafeAreaView, ScrollView, StatusBar, useColorScheme, useWindowDimensions, View } from 'react-native'
import styles from './style'

import {
  Colors, // 设置黑暗模式切换的颜色
  // DebugInstructions, // CMD+M 或者晃动手机加载菜单
  // ReloadInstructions,// 双击 R 重新加载应用
  // LearnMoreLinks,
} from 'react-native/Libraries/NewAppScreen'

function Base(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark' // 获取设备是否是黑暗模式
  const windowDimensions = useWindowDimensions() // 获取设备宽高，字体比例，缩放倍数
  const scrollViewRef = useRef<ScrollView>(null)

  useEffect(() => {
    scrollViewRef.current && scrollViewRef.current.scrollToEnd()
  }, [])

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      {/* 样式组合，设置多个样式，第一个样式后边的样式要覆盖至少第一个样式中的一个 */}
      <View style={[styles.highlight, styles.sectionContainer]}></View>

      <ScrollView ref={scrollViewRef} contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}></View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Base
