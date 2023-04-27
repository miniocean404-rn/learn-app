import {
  DefaultSectionT,
  NativeScrollEvent,
  NativeSyntheticEvent,
  SectionList,
  SectionListData,
  SectionListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React, { useEffect, useRef } from 'react'

const SectionData = [
  { data: [1, 2, 3], type: 'A' },
  { data: [77, 88, 99], type: 'B' },
  { data: [77, 88, 99], type: 'B' },
  { data: [77, 88, 99], type: 'B' },
  { data: [77, 88, 99], type: 'B' },
  { data: [77, 88, 99], type: 'B' },
  { data: [77, 88, 99], type: 'B' },
  { data: [77, 88, 99], type: 'B' },
  { data: [77, 88, 99], type: 'B' },
  { data: [77, 88, 99], type: 'B' },
  { data: [77, 88, 99], type: 'B' },
  { data: [77, 88, 99], type: 'B' },
]

// 内容分组滚动
const SystemSectionList = () => {
  const sectionRef = useRef<SectionList>(null)

  useEffect(() => {
    setTimeout(() => {
      sectionRef.current?.scrollToLocation({
        // 某一组的索引
        sectionIndex: 0,
        // 某一组中的元素的索引,这个索引会把 renderSectionHeader 的 header 也算一个索引
        itemIndex: 1,
        // 这个元素在屏幕的百分比位置 0 - 1
        viewPosition: 0.5,
        animated: true,
      })
    }, 2000)

    return () => {}
  }, [])

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    // e.nativeEvent.contentOffset.y 获取滚动的 Y 轴的距离
    console.log(e.nativeEvent.contentOffset.y)
  }

  const renderItem = (info: SectionListRenderItemInfo<number, DefaultSectionT>) => {
    const { item, index, section } = info

    return <Text>{item}</Text>
  }

  const ListHeaderComponent = () => {
    return <Text>111111111</Text>
  }

  const ListFooterComponent = () => {
    return <Text>222222222</Text>
  }

  const renderSectionHeader = ({ section }: { section: SectionListData<number, DefaultSectionT> }) => {
    return <Text>{section.type}</Text>
  }

  const ItemSeparatorComponent = (info: any) => {
    return <Text>{info.section.type}</Text>
  }

  return (
    <View>
      <SectionList
        ref={sectionRef}
        sections={SectionData}
        renderItem={renderItem}
        // 不用使用 key 属性保证唯一，这个组件 keyExtractor 函数返回一个唯一 Key 自动适配
        keyExtractor={(item, index) => `${item}-${index}`}
        // 设置容器内部元素样式
        contentContainerStyle={styles.contentStyle}
        // 是否显示滚动条 分别为横向和纵向
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        // ScrollView 内容滚动时候键盘是否消失 只有 on-drag 双端通用
        keyboardDismissMode="on-drag"
        // 点击滚动区域的时候键盘是否消失
        // never handled 的区别是 never 在有点击按钮的时先收起键盘，但是不会触发点击事件，第二次点击才触发 handled 一直会触发
        // always 不消失
        keyboardShouldPersistTaps="handled"
        onScroll={onScroll}
        // 滚动内容的头部尾部的 DOM
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
        // 每个 section 的 Header 的 DOM
        renderSectionHeader={renderSectionHeader}
        // 与 renderSectionHeader 放在一起使用,是否让 renderSectionHeader 的元素吸顶，滚动时下一个会顶掉上一个
        stickySectionHeadersEnabled
        // 分隔符 每一组的元素内的分割 不包含：renderSectionHeader
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </View>
  )
}

export default SystemSectionList

const styles = StyleSheet.create({
  contentStyle: {},
})
