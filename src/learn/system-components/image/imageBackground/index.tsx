import { Image, ImageBackground, ImageBackgroundProps, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'

import appLogo from '@/assets/logo.png'
const imageUrl = 'https://snack-web-player.s3.us-west-1.amazonaws.com/v2/47/static/media/react-native-logo.79778b9e.png'

const SystemImageBackground = () => {
  // 调用布局就使用这个 api
  const viewRef = useRef<ImageBackground>(null)

  // 调用 image 使用这个
  const imgRef = useRef<any>(null)

  useEffect(() => {
    init()
    return () => {}
  }, [])

  const init = () => {}

  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.viewStyle}
        source={appLogo}
        imageStyle={styles.imgStyle}
        ref={viewRef}
        // js 可以直接赋值 Ref
        imageRef={(Image) => {
          console.log(Image)
        }}>
        <Image source={{ uri: imageUrl, width: 20, height: 20 }}></Image>
      </ImageBackground>

      <ImageBackground style={styles.viewStyle} source={{ uri: imageUrl }}>
        <Text>{'子元素2 \n 111'}</Text>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default SystemImageBackground

const styles = StyleSheet.create({
  viewStyle: {
    width: 400,
    height: 400,
  },
  imgStyle: {
    resizeMode: 'contain',
    borderRadius: 20,
  },
})
