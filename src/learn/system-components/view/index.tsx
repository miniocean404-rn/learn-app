import { LayoutChangeEvent, SafeAreaView, StatusBar, View } from 'react-native'
import styles from './styles'
import { useEffect, useRef, useState } from 'react'

const SystemView = () => {
  const [height, setHeight] = useState(100)
  const viewRef = useRef<View>(null)

  useEffect(() => {
    setTimeout(() => {
      setHeight(200)

      // 性能瓶颈下使用这个进行设置属性，并不会重新刷新整个视图，而是直接设置原生属性
      viewRef.current?.setNativeProps({
        style: {
          backgroundColor: 'yellow',
        },
      })
    }, 1000)
  }, [])

  // e.nativeEvent 返回组件在父布局中定的位置
  const onLayout = (e: LayoutChangeEvent) => {
    console.log(e.nativeEvent)
  }

  return (
    <SafeAreaView>
      <StatusBar />

      <View style={styles.root}>
        <View style={[styles.subView1, { height }]} onLayout={onLayout} ref={viewRef}></View>
        <View style={styles.subView2}></View>
        <View style={styles.subView3}></View>
      </View>
    </SafeAreaView>
  )
}

export default SystemView
