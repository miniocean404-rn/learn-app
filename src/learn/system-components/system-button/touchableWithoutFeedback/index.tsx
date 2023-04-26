import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'

const SystemTouchableWithoutFeedback = () => {
  return (
    <View>
      {/* 官方建议几乎不用 TouchableWithoutFeedback ,并且只支持一个子节点，使用场景：隐藏的后门按钮 */}
      {/* TouchableWithoutFeedback 直接设置样式无效，需要内部嵌套一个 View 进行样式设定 */}
      <TouchableWithoutFeedback>
        <View style={styles.button}>
          <Text>按钮</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default SystemTouchableWithoutFeedback

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
})
