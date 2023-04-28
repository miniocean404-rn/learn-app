import { Animated, Button, Easing, StyleSheet, Text, View } from 'react-native'
import { useRef } from 'react'

const AnimationTiming = () => {
  const animationRef = useRef<Animated.AnimatedValue>(new Animated.Value(0))

  const onPress = () => {
    const composite = Animated.timing(animationRef.current, {
      // 到达的目标值
      toValue: 200,
      duration: 300,
      // 是否使用原生形式驱动，如果为 true 则其他动画 useNativeDriver 都要为 true
      // 并且 原生形式驱动会脱离 JS 的动画合并层
      useNativeDriver: false,

      //  easing 的四中内置动画
      //  Easing.back(3) 回拉动画
      //  Easing.ease 平缓动画
      //  Easing.bounce 弹跳动画 不会超过 toValue 最终的位置弹回
      //  Easing.elastic(4) 弹性动画 会超过 toValue 最终的位置弹回

      //  easing 的三种标准函数
      //   Easing.linear 一次方
      //   Easing.quad 二次方 中间加速动画
      //   Easing.cubic 三次方 中间加速更加明显

      //   easing  的四种补充函数
      //   Easing.bezier(0, 0, 1, 1) 贝塞尔曲线:https://cubic-bezier.com/#.46,.1,.58,1.05
      //   Easing.circle 环形曲线
      //   Easing.sin 弦波曲线
      //   Easing.exp 指数型曲线

      //   easing 自由组合动画，函数内传递上方那些动画进行组合
      //   Easing.in() 加速
      //   Easing.out() 减速
      //   Easing.inOut() 加减速
      easing: Easing.in(Easing.bounce),
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

export default AnimationTiming

const styles = StyleSheet.create({
  root: { width: '100%', height: '100%', backgroundColor: 'green' },
  view: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
})
