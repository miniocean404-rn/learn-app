// 获取原生容器组件,可以在原生组件中插入 RN 的组件进行展示、绘画
import { StyleSheet, Text, View, ViewProps, requireNativeComponent } from 'react-native'
import React from 'react'

type NativeInfoViewType = ViewProps & {
  // 这部分就是自定义属性
}

export const NativeInfoViewContainer = requireNativeComponent<NativeInfoViewType>('NativeInfoViewContainer')

const GetNativeContainerComponents = () => {
  return (
    // 原生组件使用及数据传递
    <NativeInfoViewContainer style={styles.viewInfo}>
      <View style={styles.view}>
        <Text>111</Text>
      </View>
    </NativeInfoViewContainer>
  )
}

export default GetNativeContainerComponents

const styles = StyleSheet.create({
  viewInfo: {
    width: '100%',
  },
  view: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
})
