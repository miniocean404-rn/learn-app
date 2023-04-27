import { Alert, Text, View } from 'react-native'

export const debugAlert = () => {
  // ts 会报错但是确实有这个函数，需要添加全局声明
  alert(123)

  // 系统自带的组件
  Alert.alert('标题', '信息', [
    { text: '取消', onPress: () => {} },
    { text: '确定', onPress: () => {} },
  ])
}
export const DebugConsole = () => {
  console.info('信息')
  console.debug('debug')

  // 这俩会在手机屏幕上显示，并且点击可以显示对应的行，点击代码下方的行列，可直接打开编辑器对应位置
  console.warn('警告')
  console.error('错误')

  // %d数字 %s字符 %o对象
  // 下方这三种只能在 rn 链接浏览器的调试模式中生效
  console.log('%c红色文字字号大', 'color:red;font-size:x-large')
  console.log('%c红色文字字号中', 'color:red;font-size:x-medium')
  console.log('%c红色文字字号小', 'color:red;font-size:x-small')

  // 下面可以吧布局组件树直接打印出来
  const LOGView = (
    <View>
      <Text style={{ color: 'red' }}>1</Text>
    </View>
  )
  console.log(LOGView)

  // 分组打印
  console.group()
  console.log('分组 1')
  console.group()
  console.log('分组 2')
  console.groupEnd()
  console.groupEnd()
}
