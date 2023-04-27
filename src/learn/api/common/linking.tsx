import { Linking, Platform } from 'react-native'

export const UseLinking = () => {
  // 网页链接，地图定位（一般都是对接国内的，不使用这个），拨打电话，发送短信，发送邮件，应用跳转
  // Linking.openURL('https://www.baidu.com')
  // Linking.openURL('geo://37.2122,12.222')
  // Linking.openURL('tel:10086') // 打电话
  // Linking.openURL('smsto:10086') // 发短信
  // Linking.openURL('mailto:xxx@qq.com') // 发邮件
  // Linking.openURL('test://demo?name=张三&age=2') // 跳转软件，这个是这个项目注册的 scheme
  if (Platform.OS === 'android') {
    Linking.sendIntent('com.learnapp.link_jump_test', [{ key: 'name', value: 'value' }]) // 安卓特有隐式跳转 intent
  }

  // 获取原始 URL,如果是通过 URL 打开的就可以获取到参数
  console.log(Linking.getInitialURL())

  // 打开 app 权限等信息的设置页面
  // Linking.openSettings()

  // 判断链接是否可用
  Linking.canOpenURL('https://www.baidu.com')
}
