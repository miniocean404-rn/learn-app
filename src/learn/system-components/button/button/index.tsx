import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SystemButton = () => {
  const onPress = () => {}

  return (
    <View>
      {/* 不可以设置样式 */}
      <Button title="1" color={'red'} onPress={onPress} disabled={false} />
    </View>
  )
}

export default SystemButton

const styles = StyleSheet.create({})
