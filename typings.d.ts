// 为全局添加声明,模块内部是 declare 就直接声明 declare
// 否则就以下方式继承
// declare module xx {
//    interface xx {
// }
// }

import * as rn from 'react-native/types'

declare global {
  interface AlterFn {
    (any): void
  }

  var alert: AlterFn

  declare module '*.svg'
  declare module '*.png'
  declare module '*.jpg'
  declare module '*.jpeg'
  declare module '*.gif'
  declare module '*.bmp'
  declare module '*.tiff'
}

type BaseProps = {
  name: string
}
