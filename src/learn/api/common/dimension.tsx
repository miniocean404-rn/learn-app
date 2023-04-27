import { useEffect } from 'react'
import { Dimensions, EmitterSubscription, ScaledSize, useWindowDimensions } from 'react-native'

const getScreenInfo = () => {
  // 获取缩放(屏幕密度 1逻辑像素对应设备的多少物理像素)，文字缩放
  // window 整个屏幕，screen 显示屏幕，包含状态栏
  const { width, height, scale, fontScale } = Dimensions.get('window')

  // 这个只能写在外部，不能写函数体里
  // const { width, height, scale, fontScale  } = useWindowDimensions()

  useEffect(() => {
    // 监听屏幕变化，使用场景是  安卓虚拟键的展开收起的情况
    const sub = Dimensions.addEventListener(
      'change',
      ({ window, screen }: { window: ScaledSize; screen: ScaledSize }): void => {},
    )

    return () => {
      // 取消监听
      sub.remove()
    }
  }, [])
}
