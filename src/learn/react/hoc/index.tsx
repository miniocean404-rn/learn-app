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
