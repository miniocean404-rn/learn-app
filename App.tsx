// export { default as Home } from '@/view/home' // 这个语法不是默认导出
import Home from '@/view/home'

function App(): JSX.Element {
  return <Home></Home>
}

export default App
