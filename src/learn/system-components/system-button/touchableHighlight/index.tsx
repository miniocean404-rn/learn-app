import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'

const SystemTouchableHighlight = () => {
  const onPress = () => {}
  return (
    <View>
      {/* 必须接受一个子节点,且只能有一个 */}
      {/* 所有点击事件和touchableOpacity相同，且有 onPress 才能有点击的效果 */}
      <TouchableHighlight
        style={styles.button}
        activeOpacity={0.1}
        // 指定点击时候的高亮颜色
        underlayColor={'#eee'}
        onPress={onPress}>
        <Text>按钮</Text>
      </TouchableHighlight>
    </View>
  )
}

export default SystemTouchableHighlight

const styles = StyleSheet.create({
  button: {},
})
