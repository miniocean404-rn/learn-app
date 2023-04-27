# 学习

### 启动项目

先启动 `react-native start`再启动 `android` 就不会产生新的终端

### Android 变种

命令

```json
    "android-dev-debug": "react-native run-android --variant=devDebug",
    "android-prd-debug": "react-native run-android --variant=prdDebug",
```

```js
    // 变种
    flavorDimensions "type"
    productFlavors {
        //  设置 res/values/strings 中的 <string name="app_name">LearnApp</string>
        //  设置的是包名
        //  react-native run-android --variant=devDebug 指的是 productFlavors dev 和 buildTypes 的Debug
        dev{
            resValue("string","app_name","测试包")
        }

        prd{
            resValue("string","app_name","生产包")
        }
    }
```

### 开启 Hermes

`app:gradle` 中添加以下代码开启 Hermes 减少 10% 包体积

```gradle
 project.ext.react = [
    enableHermes: true
 ]
```

### 全局 Ts 声明

根目录下创建任意`.d.ts`文件写上声明

### Babel

```js
module.exports = {
  // 很多插件以及配置绑定一起为一个包，就是预设 presets，引用即使用
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // babel-plugin-module-resolver 配置路径别名
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': ['./src'],
        },
      },
    ],
  ],
}
```

### Ref 转发 + 函数式 Ref 调用内部函数

```js
export interface CustomRef {
  beUsed: () => void;
}

const APIUseFn = () => {
  const classRef = useRef < ClassRefFnDirectUse > null
  const UseImperativeHandleRef = useRef < CustomRef > null

  const onPress = () => {
    classRef.current?.beUsed()
    UseImperativeHandleRef.current?.beUsed()
  }

  return (
    <>
      <UseImperativeHandleApi ref={UseImperativeHandleRef}></UseImperativeHandleApi>
      <ClassRefFnDirectUse ref={classRef}></ClassRefFnDirectUse>
    </>
  )
}

// 函数式组件需要 forwardRef 传递 Ref 并且使用 useImperativeHandle 给外部 Ref 添加内部方法
const UseImperativeHandleApi = forwardRef((props, ref): ReactElement => {
  const beUsed = () => {
    console.log(props)
  }

  // 为传入的 Ref.current 添加数据供外部使用
  useImperativeHandle(ref, () => ({ beUsed }), [])

  return <Text></Text>
})

// 类组件直接传递 ref 调用内函数
class ClassRefFnDirectUse extends Component {
  beUsed = () => {}

  render() {
    return <div>ClassRefFnDirectUse</div>
  }
}
```

### HOC typescript 定义

```js
import React from 'react'

// D  继承了 BaseFieldProps，说明待处理的组件上至少得具有 BaseFieldProps 定义的这几个参数
// F 说明处理后的组件上至少得具有 F 定义的这几个参数
// 而 F & Omit<D, keyof BaseFieldProps> 这一步操作则是将
// 将前面传入的泛型 D 中的 BaseFieldProps 取差集，再与 F 取并集，最终返回的组件类型为 F + D - BaseFieldProps。
const HocType = <D extends BaseProps, F>(Component: React.FC<D & F>, argument: F) => {
  const HOCView: React.FC<F & D> = (props) => {
    return <Component {...{ ...props, ...argument }} />
  }
  return HOCView
}
```
