import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SystemTouchableOpacity = () => {
  return (
    <View>
      <TouchableOpacity style={styles.button}></TouchableOpacity>
    </View>
  )
}

export default SystemTouchableOpacity

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 30,
    backgroundColor: 'blue',
  },
})
