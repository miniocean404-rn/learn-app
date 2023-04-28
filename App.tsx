// export { default as Home } from '@/view/home' // 这个语法不是默认导出
import Home from '@/view/home'
import { Platform, UIManager } from 'react-native'

// 开启 RN 自带的 LayoutAnimation 布局动画
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

const App = (): JSX.Element => <Home></Home>

export default App
