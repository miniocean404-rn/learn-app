import { StyleSheet, View } from 'react-native'

// 伪 3D 效果
export const ViewTransform = () => {
  return <View style={styles.view}></View>
}

const styles = StyleSheet.create({
  view: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    marginTop: 100,
    // 使用顺序 1. scale 2. rotateX 3. rotateZ
    // 按照顺序书写否则效果不一致
    transform: [
      { translateX: 100 },
      { translateY: 200 },
      { scale: 1.5 },
      { scaleX: 1.2 },
      { skewX: '50deg' },
      { rotateX: '70deg' },
      {
        // rotate === rotateZ
        rotateZ: '45deg',
      },
    ],
  },
})
