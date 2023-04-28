import { NativeModules } from 'react-native'

// 注册方法：https://reactnative.cn/docs/native-modules-android#toast-%E6%A8%A1%E5%9D%97
// 1. app\src\main\java\com\learnapp\MainApplication.java 中注册 Package
// 2. Package 实现 ReactPackage 并实现 createNativeModules createViewManagers 方法
// 3. createNativeModules 创建 Module 并继承 ReactContextBaseJavaModule 并实现 getName 及 想要调用的方法
// 4. 想要调用的方法需要实现 @ReactMethod 注解
export const useNativeMethod = async () => {
  // App 就是 getName 返回的方法
  const { App } = NativeModules
  // @ReactMethod 注解的方法
  App?.openGallery()
  console.log(await App?.getVersionName())
}
