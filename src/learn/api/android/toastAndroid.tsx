import { ToastAndroid } from 'react-native'

export const UseToastAndroid = () => {
  ToastAndroid.show('这是一个 toast', ToastAndroid.SHORT)

  // LONG 是 5s
  ToastAndroid.show('这是一个 toast', ToastAndroid.LONG)

  // 指定 toast 位置，但是安卓 api 30 后取消了 使用 snakBar 代替
  ToastAndroid.showWithGravity('这是一个中间 toast', ToastAndroid.SHORT, ToastAndroid.TOP)

  ToastAndroid.showWithGravityAndOffset('这是一个指定位置的 toast', ToastAndroid.SHORT, ToastAndroid.TOP, 100, 200)
}
