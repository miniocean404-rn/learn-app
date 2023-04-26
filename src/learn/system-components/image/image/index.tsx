import {
  Image,
  ImageErrorEventData,
  ImageLoadEventData,
  NativeSyntheticEvent,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native'
import React, { useEffect, useRef } from 'react'

import appLogo from '@/assets/logo.png'
const imageUrl = 'https://snack-web-player.s3.us-west-1.amazonaws.com/v2/47/static/media/react-native-logo.79778b9e.png'

const SystemImage = () => {
  const ApiRef = useRef<Image>(null)

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    Image.getSize(
      imageUrl,
      (width, height) => {},
      (error) => {},
    )

    // 预加载图片到磁盘缓存
    const res = await Image.prefetch(imageUrl)
    console.log(res)
  }

  const onLoad = (e: NativeSyntheticEvent<ImageLoadEventData>) => {
    console.log('load', e.nativeEvent)
  }

  const onError = (e: NativeSyntheticEvent<ImageErrorEventData>) => {
    console.log('error')
  }

  const onLoadStart = () => {
    console.log('onLoadStart')
  }

  const onLoadEnd = () => {
    console.log('onLoadEnd')
  }

  return (
    <SafeAreaView>
      <StatusBar></StatusBar>

      {/* 远程图片 */}
      {/* blurRadius 图片毛玻璃 */}
      {/* defaultSource debug 环境下不展示，只有 release 下才有效果 */}
      {/* fadeDuration 图片显示动画 毫秒单位 */}
      <Image
        source={{ uri: imageUrl }}
        defaultSource={appLogo}
        style={styles.img}
        blurRadius={5}
        fadeDuration={200}
        onLoad={onLoad}
        onError={onError}
        onLoadStart={onLoadStart}
        onLoadEnd={onLoadEnd}
        // Api 方式调用
        ref={ApiRef}
      />

      {/* 本地图片 */}
      <Image source={appLogo} style={styles.img} />
    </SafeAreaView>
  )
}

export default SystemImage

const styles = StyleSheet.create({
  root: {},
  img: {
    width: 200,
    height: 120,
    backgroundColor: '#c0c0c0',

    // contain 拉伸到刚好一边跟这个宽高一致
    // center 图片容器比图片大就放在中间，如果比图片小就跟 contain 一致
    // cover 放大到最小的边撑满容器
    // stretch 拉伸
    // repeat 重复
    resizeMode: 'contain',

    // tintColor: 'red', // 给 icon 的描边设置颜色，很神奇的属性
  },
})
