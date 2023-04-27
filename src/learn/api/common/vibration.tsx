import { Vibration } from 'react-native'

// 需要注册权限 android.permission.VIBRATE
export const UseVibration = () => {
  // 默认 400 毫秒的震动
  // 指定时间只能在安卓中指定 IOS 只有默认的 400
  Vibration.vibrate(1000)

  // 分批次震动 N 次，第二个参数是是否循环震动
  // 安卓是震动 100ms 后再震动 500ms
  // IOS 只能震动 400 毫秒所以 IOS 传递参数的意义为 停滞 100ms 秒后震动 400 毫秒 再停滞 500ms 后震动 400 毫秒
  Vibration.vibrate([100, 500, 600], true)

  // 长时间震动的时候才取消
  Vibration.cancel()
}
