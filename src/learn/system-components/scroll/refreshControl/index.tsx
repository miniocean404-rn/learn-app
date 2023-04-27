import {
  Dimensions,
  FlatList,
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const { width, height } = Dimensions.get('window')

// 所有滚动组件都有这个 刷新控制 及 触底函数
const SystemRefreshControl = () => {
  const [refresh, setRefresh] = useState(false)
  const arr: number[] = []

  useEffect(() => {
    for (let index = 0; index < 50; index++) {
      arr.push(1)
    }
    return () => {}
  }, [])

  const renderItem = (itemInfo: ListRenderItemInfo<number>) => {
    const { item, index } = itemInfo
    return (
      <Text>
        {item} 的 {index} 个元素
      </Text>
    )
  }

  const onRefresh = () => {
    setRefresh(true)

    setTimeout(() => {
      setRefresh(false)
    }, 3000)
  }

  const onEndReached = () => {}

  return (
    <View>
      <FlatList
        data={arr}
        style={styles.container}
        renderItem={renderItem}
        // 表示是否是横向滚动
        horizontal={false}
        refreshControl={
          <RefreshControl
            // 设置是否显示刷新动画
            refreshing={refresh}
            // 手动刷新触发的函数
            onRefresh={onRefresh}
          />
        }
        // scrollview 没有这个触底函数
        onEndReached={onEndReached}
        // 距离底部多少距离开始触发，范围：0 - 1 ，占据屏幕的百分比值
        onEndReachedThreshold={0.3}
      />
    </View>
  )
}

export default SystemRefreshControl

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
