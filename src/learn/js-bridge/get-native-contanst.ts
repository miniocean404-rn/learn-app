import { NativeModules } from 'react-native'

export const getNativeContanst = () => {
  const { App } = NativeModules
  const { versionName, versionCode } = App
  console.log(versionCode, versionName)
}
