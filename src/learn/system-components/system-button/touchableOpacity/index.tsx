import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SystemTouchableOpacity = () => {
  const onPress = () => {}
  const onLongPress = () => {}
  const onPressIn = () => {}
  const onPressOut = () => {}

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        // 按钮点击不透明度的变化范围 0.5 就是 0.5 - 1 的展示 默认 0.5
        activeOpacity={0.7}
        onPress={onPress}
        onLongPress={onLongPress}
        // 长按多久才出发长按 毫秒级
        delayLongPress={1000}
        // 按下
        onPressIn={onPressIn}
        // 松手
        onPressOut={onPressOut}>
        <Text>文字</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SystemTouchableOpacity

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 30,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
