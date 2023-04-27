import { Animated, Button, StyleSheet, Text, View } from 'react-native'
import { useRef } from 'react'

const AnimationMove = () => {
  const BaseRef = useRef<Animated.AnimatedValue>(new Animated.Value(0)).current

  const onPress = () => {
    const composite = Animated.timing(BaseRef, {
      // 到达的目标值
      toValue: 500,
      duration: 300,
      // 是否使用原生形式驱动，如果为 true 则其他动画 useNativeDriver 都要为 true
      // 并且 原生形式驱动会脱离 JS 的动画合并层
      useNativeDriver: false,
    })

    composite.start()
  }

  return (
    <View style={styles.root}>
      <Button title="按钮" onPress={onPress}></Button>
      <Animated.View style={[styles.view, { marginLeft: BaseRef }]}></Animated.View>
    </View>
  )
}

export default AnimationMove

const styles = StyleSheet.create({
  root: { width: '100%', height: '100%', backgroundColor: 'green' },
  view: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
})
