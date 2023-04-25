import { LayoutChangeEvent, SafeAreaView, StatusBar, View } from 'react-native'
import styles from './styles'
import { useEffect, useState } from 'react'

const SystemView = () => {
  const [height, setHeight] = useState(100)

  useEffect(() => {
    setTimeout(() => {
      setHeight(200)
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
        <View style={[styles.subView1, { height }]} onLayout={onLayout}></View>
        <View style={styles.subView2}></View>
        <View style={styles.subView3}></View>
      </View>
    </SafeAreaView>
  )
}

export default SystemView
