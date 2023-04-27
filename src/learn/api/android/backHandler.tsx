import { useEffect } from 'react'
import { BackHandler } from 'react-native'
import { useBackHandler } from '@react-native-community/hooks'

// 这个可以用社区库实现
export const UseBackHandler = () => {
  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', BackPress)

    return () => {
      sub.remove()
      // 或者
      BackHandler.removeEventListener('hardwareBackPress', BackPress)
    }
  }, [])

  // 监听安卓返回，return true 进行拦截 return false 不拦截
  const BackPress = () => {
    return false
  }
}

// 社区库实现的方式,就不用手动监听，直接函数中 return false 或者 true
export const communityBackHandler = () => {
  useBackHandler(() => {
    return false
  })
}

export const exitApp = () => {
  // 直接退出 App ，不用多层返回路由回到主页面后才退出
  BackHandler.exitApp()
}
