import { Animated, Button, LayoutAnimation, StyleSheet, Text, View } from 'react-native'
import { useEffect, useRef, useState } from 'react'

// 需要 App.js 中开启 RN 自带的 LayoutAnimation 布局动画
// if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
//     UIManager.setLayoutAnimationEnabledExperimental(true)
// }

// 不写动画，让 RN 自带的 LayoutAnimation 感知位移、显示隐藏 并作出动画
const LayoutAnimationView = () => {
  const [X, setX] = useState(0)

  useEffect(() => {
    return () => {}
  }, [])

  const onPress = () => {
    // LayoutAnimation.configureNext(
    //   // LayoutAnimation.Presets.spring
    //   // LayoutAnimation.Presets.linear
    //   LayoutAnimation.Presets.easeInEaseOut,
    //   // 动画结束
    //   () => {},
    //   // 动画异常
    //   () => {},
    // )

    // 上方的简写形式
    LayoutAnimation.linear()

    setX(300)
  }

  return (
    <View style={styles.root}>
      <Button title="按钮" onPress={onPress}></Button>
      {/* margin 定位 translate 都可以 */}
      <Animated.View style={[styles.view, { marginLeft: X }]}></Animated.View>
    </View>
  )
}

export default LayoutAnimationView

const styles = StyleSheet.create({
  root: { width: '100%', height: '100%', backgroundColor: 'green' },
  view: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
})
