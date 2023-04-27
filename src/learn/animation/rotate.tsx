import { Animated, Button, StyleSheet, View } from 'react-native'
import { useRef } from 'react'

const AnimationRotate = () => {
  const rotateRef = useRef<Animated.AnimatedValue>(new Animated.Value(0))

  // 将数字范围映射为字符串数字范围
  const rotateValue = rotateRef.current.interpolate({
    // 这个范围如果是单个动画最好是 outputRange 和 outputRange 保持一致, toValue 来设置到达范围
    // inputRange 的 0 - 45 对应 outputRange '0deg', '90deg'，就是 toValue 是 45 对应的是 90 deg 20 就是 40 deg
    // 所以多个动画可以设置百分比 0-1
    inputRange: [0, 45],
    outputRange: ['0deg', '90deg'],
  })

  const onPress = () => {
    const composite = Animated.timing(rotateRef.current, {
      // 到达的目标值
      toValue: 20,
      duration: 1000,
      // 是否使用原生形式驱动，如果为 true 则其他动画 useNativeDriver 都要为 true
      // 并且 原生形式驱动会脱离 JS 的动画合并层
      useNativeDriver: false,
    })

    composite.start()
  }

  return (
    <View style={styles.root}>
      <Button title="按钮" onPress={onPress}></Button>
      <Animated.View style={[styles.view, { transform: [{ rotate: rotateValue }] }]} />
    </View>
  )
}

export default AnimationRotate

const styles = StyleSheet.create({
  root: { width: '100%', height: '100%', backgroundColor: 'green' },
  view: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
})
