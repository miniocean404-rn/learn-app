import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  root: {},
  txt: {
    fontSize: 20,
    fontWeight: 'bold', // 安卓只有 bold 和 normal
    // 使用 fontFamily ,要在 android/app/src/main 下创建 assets/fonts 并且 放入字体文件，字体放完后重启项目

    // 对于文字自定义宽高时候使用，可以设置文字的位置
    width: 50,
    height: 300,
    backgroundColor: 'blue',

    fontFamily: 'pingfangsc-medium',
    textAlignVertical: 'center',

    textDecorationStyle: 'solid', // 安卓中(dash 虚线 ,dotted 点)不生效      solid 实心 dash 虚线 ,dotted 点
    textDecorationLine: 'line-through', // 线是什么位置的 underline 下滑线 line-through 删除线 underline line-through 两条线都有

    // 文字阴影 以下属性联合使用
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8, // 虚化程度
  },
  innerText: {
    fontSize: 30,
    color: 'red',

    // 下方及 margin padding 对嵌套字体无效
    textAlign: 'center',
    textAlignVertical: 'top',
  },
})

export default styles
