import {
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
  ViewToken
} from 'react-native'
import React, { useEffect, useRef } from 'react'

// FlatList 高性能列表组件，scrollview 卡顿的时候使用
const SystemFlatList = () => {
  const arr: number[] = []
  const flatListRef = useRef<FlatList>(null)

  useEffect(() => {
    for (let index = 0; index < 60; index++) {
      arr.push(index)
    }

    setTimeout(() => {
      // 滚动到指定元素
      //   flatListRef.current?.scrollToIndex({
      //     // 滚动到第几个元素
      //     index: 29,
      //     // 滚动的指定元素为 屏幕的百分比位置 0 - 1 顶部到底部
      //     viewPosition: 0.5,
      //     animated: true,
      //   })

      // 不建议使用,性能差
      //   flatListRef.current?.scrollToItem({
      //     // 滚动到 data 中 item 的值的位置，（数组里的值）
      //     item: 10,
      //     // 滚动的指定元素为 屏幕的百分比位置 0 - 1 顶部到底部
      //     viewPosition: 0.5,
      //     animated: true,
      //   })

      // 滚动多少像素
      //   flatListRef.current?.scrollToOffset({ offset: 200, animated: true })

      // 滚动到底部
      flatListRef.current?.scrollToEnd({ animated: true })
    }, 2000)

    return () => {}
  }, [])

  const onMomentumScrollBegin = () => {}
  const onMomentumScrollEnd = () => {}
  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    // e.nativeEvent.contentOffset.y 获取滚动的 Y 轴的距离
    // console.log(e.nativeEvent.contentOffset.y)
  }
  const onViewableItemsChanged = (info: { viewableItems: Array<ViewToken> }) => {
    console.log(info.viewableItems)
  }

  const renderItem = (itemInfo: ListRenderItemInfo<number>) => {
    const { item, index } = itemInfo
    return (
      <Text>
        {item} 的 {index} 个元素
      </Text>
    )
  }

  const ListHeaderComponent = () => {
    return <Text>111111111</Text>
  }
  const ListFooterComponent = () => {
    return <Text>222222222</Text>
  }
  const ListEmptyComponent = () => {
    return <Text>222222222</Text>
  }
  const ItemSeparatorComponent = () => {
    return <Text>-----------------</Text>
  }

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={arr}
        // 表示是否是横向滚动
        horizontal={false}
        // 初始渲染数据数量，这样可以防止白屏的部分的时间，是个优化
        initialNumToRender={21}
        // 内部样式
        contentContainerStyle={styles.contentContainerStyle}
        // 是否显示滚动条 分别为横向和纵向
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        // ScrollView 内容滚动时候键盘是否消失 只有 on-drag 双端通用
        keyboardDismissMode="on-drag"
        // 点击滚动区域的时候键盘是否消失
        // never handled 的区别是 never 在有点击按钮的时先收起键盘，但是不会触发点击事件，第二次点击才触发 handled 一直会触发
        // always 不消失
        keyboardShouldPersistTaps="handled"
        // 是否反向渲染，直接到底部并且是从 0 开始渲染
        inverted={false}
        // 每行有一个元素 总元素数量 / numColumns = 最终行数，相当于并排渲染
        numColumns={1}
        renderItem={renderItem}
        // 不用使用 key 属性保证唯一，这个组件 keyExtractor 函数返回一个唯一 Key 自动适配
        keyExtractor={(item, index) => `${item}+${index}`}
        // 滚动内容的头部尾部的 DOM
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
        // data 为空数据时候的样子 (包含 ListHeaderComponent ListFooterComponent)
        ListEmptyComponent={ListEmptyComponent}
        // 每个元素的分隔符的样式 (不包含 ListHeaderComponent ListFooterComponent)
        ItemSeparatorComponent={ItemSeparatorComponent}
        // 这两个方法都只有松手时候才会触发 onMomentumScrollEnd 会触发多次
        onMomentumScrollBegin={onMomentumScrollBegin}
        onMomentumScrollEnd={onMomentumScrollEnd}
        onScroll={onScroll}
        // 获取所有可见元素的列表, 初次及滚动时触发
        // 这个每次热更新都会报错需要重新保存触发热更新才正常
        // onViewableItemsChanged={onViewableItemsChanged}
      />
    </View>
  )
}

export default SystemFlatList

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: '#eee'
  }
})
