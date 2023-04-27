import { useEffect } from 'react'
import { Keyboard } from 'react-native'

export const UseKeyboard = () => {
  useEffect(() => {
    // 这俩个事件一定能监听到，但是其他不一定能监听到
    const sub1 = Keyboard.addListener('keyboardDidShow', () => {
      console.log('键盘出现')
    })
    const sub2 = Keyboard.addListener('keyboardDidHide', () => {
      console.log('键盘隐藏')
    })

    return () => {
      sub1.remove()
      sub2.remove()
    }
  }, [])
}

export const UseKeyboardHidden = () => {
  // 直接隐藏键盘
  Keyboard.dismiss()
}
