import { Animated, Button, StyleSheet, Text, View } from 'react-native'
import { useRef } from 'react'

const AnimationFn = () => {
  const animationRef = useRef<Animated.AnimatedValue>(new Animated.Value(0))

  const onPress = () => {
    // const composite = Animated.timing(animationRef.current, {
    //   // 到达的目标值
    //   toValue: 500,
    //   duration: 300,
    //   // 是否使用原生形式驱动，如果为 true 则其他动画 useNativeDriver 都要为 true
    //   // 并且 原生形式驱动会脱离 JS 的动画合并层
    //   useNativeDriver: false,
    // })

    // 衰减动画 用的少
    // const composite = Animated.decay(animationRef.current, {
    //   velocity: 1, // 初始速度
    //   deceleration: 0.997, // 默认 0.997，衰减速率，越小衰减越快
    //   useNativeDriver: false,
    // })

    // 弹性动画 用的少
    const composite = Animated.spring(animationRef.current, {
      toValue: 200,
      useNativeDriver: false,
      restDisplacementThreshold: 0.001, // 弹簧应被视为静止的速度，像素/秒 默认 0.001
      delay: 0, // 延迟时间 默认 0

      // 通过三组参数控制，每次只能用一组，其实就是三套物理模型（公式）

      // 第一组配置
      //   bounciness: 8, // 控制弹性大小，越大越弹 默认 8
      //   speed: 12, // 控制弹性速度 默认 12

      // 第二组配置
      //   tension: 40, // 控制弹簧的张力 越大速度越快 默认 40
      //   friction: 7, // 控制摩擦力 越小越弹 7

      // 第三组配置
      stiffness: 100, // 弹簧刚度系数，越大越弹 默认 100
      damping: 10, // 阻力大小 越小越弹 默认 10
      mass: 1, // 弹簧质量，越大惯性越大，动画很难停下
    })

    composite.start()
  }

  return (
    <View style={styles.root}>
      <Button title="按钮" onPress={onPress}></Button>
      {/* margin 定位 translate 都可以 */}
      <Animated.View style={[styles.view, { marginLeft: animationRef.current }]}></Animated.View>
    </View>
  )
}

export default AnimationFn

const styles = StyleSheet.create({
  root: { width: '100%', height: '100%', backgroundColor: 'green' },
  view: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
})
