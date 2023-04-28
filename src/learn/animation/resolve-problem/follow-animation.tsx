import { Animated, Button, StyleSheet, Text, View } from 'react-native'
import { useRef } from 'react'

const colors = ['red', 'green', 'blue', 'yellow', 'orange']

// useState 改变值导致的 跟随动画 卡顿的解决方案
const FollowAnimation = () => {
  // const [scrollY, setScrollY] = useState(0);
  const scrollY = useRef(new Animated.Value(0)).current

  const viewList = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    return (
      <>
        {array.map((item, index) => (
          <View
            key={item}
            style={{
              width: 60,
              height: 100,
              backgroundColor: colors[index % 5],
            }}
          />
        ))}
      </>
    )
  }

  return (
    <View style={styles.root}>
      {/* 左边 */}
      <View style={styles.leftLayout}>
        <Animated.View
          style={{
            width: 60,
            transform: [
              // {translateY: -scrollY}

              // Animated 的 value 不能直接赋值为负数，需要使用 Animated.multiply() 相乘函数进行计算
              { translateY: Animated.multiply(-1, scrollY) },
            ],
          }}
        >
          {viewList()}
        </Animated.View>
      </View>

      {/* 右边 */}
      <View style={styles.rightLayout}>
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          // onScroll={(event) => {
          //     setScrollY 是异步执行
          //     setScrollY(event.nativeEvent.contentOffset.y);
          // }}

          // Animated.event 会桥接原生动画，把原生动画回调到 js 层，是同步的
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { y: scrollY },
                },
              },
            ],
            { useNativeDriver: true },
          )}
        >
          {viewList()}
        </Animated.ScrollView>
      </View>
    </View>
  )
}

export default FollowAnimation

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  leftLayout: {
    width: 60,
    backgroundColor: '#00FF0030',
    flexDirection: 'column',
  },
  rightLayout: {
    width: 60,
    height: '100%',
    backgroundColor: '#0000FF30',
    marginLeft: 100,
  },
})
