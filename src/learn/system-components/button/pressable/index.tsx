import { Pressable, PressableStateCallbackType, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'

// 这个组件主要是为了控制按下按钮的颜色的反转
const SystemPressable = () => {
  const pressableStateCb = (state: PressableStateCallbackType): StyleProp<ViewStyle> => {
    // pressed 表示按钮是否被按下
    const { pressed } = state

    return [styles.button, pressed && styles.buttonChnage]
  }

  return (
    <View>
      <Pressable style={pressableStateCb}>
        {/* 这个按钮存在的特殊回调方式 */}
        {({ pressed }) => {
          return <Text style={pressed ? styles.txt1 : styles.txt}>按 钮</Text>
        }}
      </Pressable>
    </View>
  )
}

export default SystemPressable

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonChnage: {
    backgroundColor: 'white',
  },
  txt: {
    fontSize: 24,
    color: 'white',
  },
  txt1: {
    fontSize: 24,
    color: 'blue',
  },
})
