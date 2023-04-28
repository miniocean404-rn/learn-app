import { Animated, Button, StyleSheet, Text, View } from 'react-native'
import { useRef } from 'react'

// 组合动画
const AnimationCombined = () => {
  const translateXRef = useRef<Animated.AnimatedValue>(new Animated.Value(0)).current
  const translateYRef = useRef<Animated.AnimatedValue>(new Animated.Value(0)).current
  const scaleRef = useRef<Animated.AnimatedValue>(new Animated.Value(1)).current

  const onPress = () => {
    const compositeX = Animated.timing(translateXRef, {
      // 到达的目标值
      toValue: 300,
      duration: 300,
      // 是否使用原生形式驱动，如果为 true 则其他动画 useNativeDriver 都要为 true
      // 并且 原生形式驱动会脱离 JS 的动画合并层
      useNativeDriver: false,
    })
    const compositeY = Animated.timing(translateYRef, {
      // 到达的目标值
      toValue: 200,
      duration: 300,
      // 是否使用原生形式驱动，如果为 true 则其他动画 useNativeDriver 都要为 true
      // 并且 原生形式驱动会脱离 JS 的动画合并层
      useNativeDriver: false,
    })
    const compositeScale = Animated.timing(scaleRef, {
      // 到达的目标值
      toValue: 1.5,
      duration: 300,
      // 是否使用原生形式驱动，如果为 true 则其他动画 useNativeDriver 都要为 true
      // 并且 原生形式驱动会脱离 JS 的动画合并层
      useNativeDriver: false,
    })

    // 并发执行动画
    // Animated.parallel([compositeX, compositeY, compositeScale]).start()

    // 顺序执行动画
    // Animated.sequence([compositeX, compositeY, compositeScale]).start()

    // 顺序执行动画 每个动画间隔 参数 1 的时间
    // Animated.stagger(1000, [compositeX, compositeY, compositeScale]).start()

    // 顺序执行动画 手动每个动画间隔时间
    Animated.sequence([compositeX, Animated.delay(500), compositeY, Animated.delay(1500), compositeScale]).start()
  }

  return (
    <View style={styles.root}>
      <Button title="按钮" onPress={onPress}></Button>
      {/* margin 定位 translate 都可以 */}
      <Animated.View
        style={[
          styles.view,
          { transform: [{ translateX: translateXRef }, { scale: scaleRef }, { translateY: translateYRef }] },
        ]}
      ></Animated.View>
    </View>
  )
}

export default AnimationCombined

const styles = StyleSheet.create({
  root: { width: '100%', height: '100%', backgroundColor: 'green' },
  view: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
})
