import { NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputChangeEventData, View } from 'react-native'
import React, { useEffect, useRef } from 'react'

const SystemTextInput = () => {
  const inputRef = useRef<TextInput>(null)

  useEffect(() => {
    setTimeout(() => {
      // API 方式自动聚焦
      inputRef.current?.focus()
    }, 2000)

    setTimeout(() => {
      // API 方式失焦
      //   inputRef.current?.blur()
    }, 3000)

    return () => {}
  }, [])

  const onFocus = () => {}
  const onBlur = () => {}
  const onChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    console.log(e.nativeEvent)
  }
  const onChangeText = (text: string) => {}

  return (
    <View>
      <TextInput
        style={styles.input}
        // 自动聚焦
        autoFocus={false}
        ref={inputRef}
        // 输入法点击确认（对钩）自动失焦
        blurOnSubmit
        // 隐藏光标
        caretHidden={false}
        // defaultValue="默认值"
        // 是否可编辑
        editable
        // 所有平台可用的值
        // default
        // number-pad decimal-pad numeric number-pad用的最多
        // email-address
        // phone-pad // 输入手机号时使用
        // keyboardType="default"

        // done
        // go 向右的箭头
        // next 和向右的箭头很像
        // search 搜索图标
        // send 发送图标
        // returnKeyType="done"

        // 可输入最大长度
        // maxLength={11}
        // 是否可多行输入
        // multiline
        // numberOfLines 可输入多行（超出后还可输入）但是只显示两行
        // numberOfLines={2}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        onChangeText={onChangeText}
        // 控制选中的文字范围 0 开始是第一个字
        selection={{ start: 1, end: 3 }}
        selectionColor={'red'}
        // 选中时候全部选中且聚焦（需要关闭自动聚焦）
        selectTextOnFocus
        // 安全模式,输入密码时：需要关闭 multiline 关闭 defaultValue
        secureTextEntry></TextInput>
    </View>
  )
}

export default SystemTextInput

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 200,
    backgroundColor: '#f0f0f0',
    fontSize: 24,
    color: 'red',
    textAlign: 'center',
    // 垂直方向距离
    textAlignVertical: 'bottom',
  },
})
