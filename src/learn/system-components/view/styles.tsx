import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  root: {
    // reverse 都是从另一个方向的头部开始排列
    flexDirection: 'column',
    alignItems: 'center',
    height: '80%',
    width: '100%',
    backgroundColor: '#c0c0c0',
    marginTop: 100,
    paddingLeft: '1%',
    position: 'relative',
  },
  subView1: {
    width: 100,
    height: 100,
    backgroundColor: 'red',

    position: 'absolute',
    top: 20,
    left: 20,

    borderWidth: 5, // 不可以设置百分比
    borderColor: 'white',

    flexGrow: 4, // flexGrow 将 flex 布局中的 flexGrow 所有相加，每个数字是多少就占百分之多少
  },
  subView2: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    flexGrow: 4,
  },
  subView3: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    flexGrow: 1,
  },
})

export default styles
