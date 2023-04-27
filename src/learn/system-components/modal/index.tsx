import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const SystemModal = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    return () => {}
  }, [])

  const onPress = () => {
    setVisible(true)
  }
  const onRequestClose = () => {
    setVisible(false)
  }

  const onShow = () => {}
  const onDismiss = () => {}

  return (
    <View>
      <Button title="按钮" onPress={onPress} />

      <Modal
        visible={visible}
        // 监听安卓物理返回键
        onRequestClose={onRequestClose}
        // modal 背景透明
        transparent={true}
        // 状态栏透明，（状态栏和 Modal 的内容融为一体，沉浸式）
        statusBarTranslucent
        // fade 淡化效果 slide 底部弹起
        animationType="fade"
        onShow={onShow}
        // 关闭的回调,目前有 bug 等待官方解决
        onDismiss={onDismiss}
      >
        <View style={styles.place}></View>
        <View style={styles.modalRoot}>
          <Text>1111</Text>
        </View>
      </Modal>
    </View>
  )
}

export default SystemModal

const styles = StyleSheet.create({
  place: {
    width: '100%',
    height: '100%',
    backgroundColor: '#00000030',
    position: 'relative',
  },
  modalRoot: {
    width: '100%',
    height: 200,
    backgroundColor: 'red',
    position: 'absolute',
    top: 300,
  },
})
