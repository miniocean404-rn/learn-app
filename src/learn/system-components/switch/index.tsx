import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'

const SystemSwitch = () => {
  const [value, setValue] = useState(false)

  const onValueChange = (value: boolean) => {
    setValue(value)
  }

  return (
    <View>
      <Switch
        value={value}
        // 值改变时候回调，给的是改变后的值
        onValueChange={onValueChange}
        disabled={false}
        // 按钮打开关闭时候 背景色（不包含小球）
        trackColor={{ true: 'red', false: '#808080' }}
        // 小球的颜色
        thumbColor={'#fff'}
      />
    </View>
  )
}

export default SystemSwitch

const styles = StyleSheet.create({})
