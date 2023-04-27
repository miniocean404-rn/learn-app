import { Dimensions, PixelRatio } from 'react-native'

export const getPixelRatio = () => {
  // 屏幕像素比 逻辑像素比物理像素
  console.log(PixelRatio.get())
  console.log(Dimensions.get('screen').scale)

  // 获取字体缩放比例 IOS 没有这个值
  console.log(PixelRatio.getFontScale())

  // 获取逻辑像素 * PixelRatio.get() 的值 得到 真实物理像素数量
  console.log(PixelRatio.getPixelSizeForLayoutSize(100))

  console.log(32.1 * PixelRatio.get())

  // ! 某些时候的样式救命稻草
  // 用于处理 32.x 小数像素转换真实物理像素的时候自动舍去小数点，但是当这样的操作多了就会出现空出可能一个像素导致背景颜色显现
  // 它会帮你自动处理像素转换 逻辑像素转换完后 正好 物理像素是整数的值
  console.log(PixelRatio.roundToNearestPixel(12.9))
}
