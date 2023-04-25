import { Text } from 'react-native'
import { Component, ReactElement, forwardRef, useImperativeHandle } from 'react'
import { useRef } from 'react'

export interface CustomRef {
  beUsed: () => void
}

const APIUseFn = () => {
  const classRef = useRef<ClassRefFnDirectUse>(null)
  const UseImperativeHandleRef = useRef<CustomRef>(null)

  const onPress = () => {
    classRef.current?.beUsed()
    UseImperativeHandleRef.current?.beUsed()
  }

  return (
    <>
      <UseImperativeHandleApi ref={UseImperativeHandleRef}></UseImperativeHandleApi>
      <ClassRefFnDirectUse ref={classRef}></ClassRefFnDirectUse>
    </>
  )
}

// 函数式组件需要 forwardRef 传递 Ref 并且使用 useImperativeHandle 给外部 Ref 添加内部方法
const UseImperativeHandleApi = forwardRef((props, ref): ReactElement => {
  const beUsed = () => {
    console.log(props)
  }

  // 为传入的 Ref.current 添加数据供外部使用
  useImperativeHandle(ref, () => ({ beUsed }), [])

  return <Text></Text>
})

// 类组件直接传递 ref 调用内函数
class ClassRefFnDirectUse extends Component {
  beUsed = () => {}

  render() {
    return <div>ClassRefFnDirectUse</div>
  }
}

export default APIUseFn
