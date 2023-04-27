import { Platform } from 'react-native'

export const getPlatform = () => {
  // 获取平台
  console.log(Platform.OS)

  // 打印 android: sdk 版本，ios:
  console.log(Platform.Version)

  // 包含
  //   {
  //     "Brand":"google", 品牌
  //     "Fingerprint":"google/sdk_google_phone_x86/generic_x86:7.0/NYC/6696031:userdebug/dev-keys", 指纹
  //     "Manufacturer":"Google", 制造商
  //     "Model":"Android SDK built for x86",
  //     "Release":"7.0", 安卓版本
  //     "Serial":"EMULATOR32X1X12X0",
  //     "ServerHost":"10.0.2.2:8081",
  //     "Version":24, sdk 版本
  //     "isTesting":false,
  //     "reactNativeVersion":{
  //         "major":0,
  //         "minor":71,
  //         "patch":7,
  //         "prerelease":null
  //     },
  //     "uiMode":"normal" UI 方式
  // }
  console.log(Platform.constants)

  // 针对 IOS 环境
  // console.log(Platform.isPad)

  // 判断当前设备是否是电视 双平台
  console.log(Platform.isTV)

  // 根据不同平台选择不同 样式属性，直接赋值 stylesheet 中的属性上
  // 也可以以对象形式，然后用 省略号注入 stylesheet 的样式中
  const style = Platform.select({
    android: 20,
    ios: 0,
    default: 10,
  })

  console.log(style)
}
