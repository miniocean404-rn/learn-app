import { StyleSheet } from 'react-native/types'

const getStyleSheet = () => {
  const s1 = {
    fontSize: 20,
  }

  const s2 = {
    fontSize: 20,
    color: 'red',
  }

  // 样式合并，返回[s1,s2]数组，比直接放数组，渲染效率更高（在 diff 时候可以保证数组不变，直接写 [] 每次对比都新建了数组）
  StyleSheet.compose(s1, s2)

  // 将样式合并为一个对象，如果样式重复，则后边覆盖前面的
  StyleSheet.flatten([s1, s2])

  // 直接返回一个绝对定位的布局属性对象 ,不是个函数，是个常量对象
  console.log(StyleSheet.absoluteFill)

  // 头发丝尺寸（屏幕中分割符的尺寸，就是屏幕可以显示的最小尺寸, 屏幕的 1 物理像素）= 1物理像素 / Dimensions.get('screen').scale
  console.log(StyleSheet.hairlineWidth)
}
