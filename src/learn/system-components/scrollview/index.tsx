import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import React, { useEffect, useRef } from 'react'

const { width, height } = Dimensions.get('window')

const SystemScrollView = () => {
  const scrollRef = useRef<ScrollView>(null)

  useEffect(() => {
    // 滚动到指定位置
    scrollRef.current?.scrollTo({ y: 300, animated: true })

    // 滚动到底部
    scrollRef.current?.scrollToEnd({ animated: true })

    return () => {}
  }, [])

  const content = () => {
    const arr = []
    for (let index = 0; index < 50; index++) {
      arr.push(<Text style={styles.txt}>item {index}</Text>)
    }
    return arr
  }

  const onMomentumScrollBegin = () => {}
  const onMomentumScrollEnd = () => {}
  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    // e.nativeEvent.contentOffset.y 获取滚动的 Y 轴的距离
    console.log(e.nativeEvent.contentOffset.y)
  }

  return (
    <View>
      <ScrollView
        ref={scrollRef}
        style={styles.container}
        // 表示是否是横向滚动
        horizontal={false}
        // 设置容器内部元素样式
        contentContainerStyle={styles.contentStyle}
        // ScrollView 内容滚动时候键盘是否消失 只有 on-drag 双端通用
        keyboardDismissMode="on-drag"
        // 点击滚动区域的时候键盘是否消失
        // never handled 的区别是 never 在有点击按钮的时先收起键盘，但是不会触发点击事件，第二次点击才触发 handled 一直会触发
        // always 不消失
        keyboardShouldPersistTaps="handled"
        // 这两个方法都只有松手时候才会触发 onMomentumScrollEnd 会触发多次
        onMomentumScrollBegin={onMomentumScrollBegin}
        onMomentumScrollEnd={onMomentumScrollEnd}
        onScroll={onScroll}
        // IOS 特有属性 IOS 必须写，控制每多少毫秒回调一次 onScroll，是根据每一帧进行回调的 16 就是最小时间
        scrollEventThrottle={16}
        // 超出滚动区域后还进行拉伸时 always 会有轻微拉伸或者水波纹效果，根据系统变化 never 什么效果都没有
        overScrollMode="never"
        // 是否可以滚动
        scrollEnabled
        // 初始滚动距离
        contentOffset={{ x: 0, y: 100 }}
        // 是否显示滚动条 分别为横向和纵向
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        // 第几个元素吸顶，滚动到超过其位置，这个元素在顶部不动
        stickyHeaderIndices={[3]}
      >
        <TextInput style={styles.input}></TextInput>

        {content()}
      </ScrollView>

      {/* <ScrollView
        style={styles.container2}
        horizontal
        // 是否开启分页滚动，横向的时候就是轮播图的效果
        pagingEnabled>
        <View style={styles.content}></View>
        <View style={[styles.content, { backgroundColor: 'blue' }]}></View>
        <View style={[styles.content, { backgroundColor: 'red' }]}></View>
      </ScrollView> */}
    </View>
  )
}

export default SystemScrollView

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#eee',
  },

  txt: {
    color: 'red',
    fontSize: 18,
  },
  contentStyle: {
    // 左右空出 16
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  input: {
    color: 'blue',
    width: '100%',
    height: 50,
    backgroundColor: '#767676',
  },

  container2: {
    width: '100%',
    height: 200,
  },
  content: {
    width,
    height: 200,
    backgroundColor: 'yellow',
  },
})
