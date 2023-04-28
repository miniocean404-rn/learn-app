import {
  NativeSyntheticEvent,
  StyleSheet,
  UIManager,
  ViewProps,
  findNodeHandle,
  requireNativeComponent,
} from 'react-native'
import React, { useEffect, useRef } from 'react'

interface OnShapeChangeEvent {
  shape: string
}

type NativeInfoViewType = ViewProps & {
  // 这部分就是自定义属性
  avatar?: string
  name?: string
  desc?: string
  num?: number
  onShapeChange?: (e: NativeSyntheticEvent<OnShapeChangeEvent>) => void
}

export const NativeInfoView = requireNativeComponent<NativeInfoViewType>('NativeInfoView')

const avatarUrl = 'http://img.godoutu.com/large/006r3PQBjw1fba7oyl2qoj307i07i3yx.jpg'

// 未解决报错：Invariant Violation: Tried to register two views with the same name NativeInfoView, js engine: hermes
// 1. 插入原生片段,及可设置 props
// 2. 原生组件回调方法
// 3. 给原生发送命令
const GetNativeComponents = () => {
  const NativeRef = useRef(null)

  const onShapeChange = (e: NativeSyntheticEvent<OnShapeChangeEvent>) => {
    console.log(e.nativeEvent.shape)
  }

  // 发送命令给原生层
  const sendCommand = (commandId: string, params: string[]) => {
    // 获取视图参数
    const viewId = findNodeHandle(NativeRef.current)
    // 获取原生层注册的命令
    const command = UIManager.NativeInfoView.Commands[commandId].toString()
    // 分发调用原生层函数
    UIManager.dispatchViewManagerCommand(viewId, command, params)
  }

  useEffect(() => {
    setTimeout(() => {
      sendCommand('setShape', ['round'])
    }, 2000)

    return () => {}
  }, [])

  return (
    // 原生组件使用及数据传递
    <NativeInfoView
      ref={NativeRef}
      style={styles.viewInfo}
      avatar={avatarUrl}
      name="张三"
      desc="我是张三"
      num={15}
      onShapeChange={onShapeChange}
    />
  )
}

export default GetNativeComponents

const styles = StyleSheet.create({
  viewInfo: {
    width: '100%',
    height: 500,
  },
})
