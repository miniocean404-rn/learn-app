import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import styles from './styles'

const SystemText = (): JSX.Element => {
  const onPress = () => {}
  const onLongPress = () => {}

  return (
    <SafeAreaView>
      <StatusBar></StatusBar>

      <View style={styles.root}>
        {/* numberOfLines 字体换行属性 需要搭配 ellipsizeMode */}
        {/* ellipsizeMode="" tail 后方显示 ...  clip 剪裁没有任何显示  head 前方加 ... middle 中间加 ...*/}
        {/* selectable 文字是否可选中 */}
        {/* selectionColor 选中文字颜色 #xxx 或者 英文 */}
        {/* allowFontScaling 跟随系统字号 */}
        <Text
          style={styles.txt}
          numberOfLines={2}
          ellipsizeMode="tail"
          selectable
          selectionColor={'#f0f0f0'}
          onPress={onPress}
          onLongPress={onLongPress}
          allowFontScaling>
          {'文字这么写可以换行 \n  换行啦'}
          {/* 嵌套文字无法添加 margin padding 只能通过空格进行添加 */}
          <Text style={styles.innerText}>文字嵌套</Text>
          文字
        </Text>

        <Text>
          {'文字这么写可以换行 \n换行啦'}
          {/* 嵌套文字无法添加 margin padding 只能通过 空格 \n 进行添加 */}
          <Text style={[]}>文字嵌套</Text>
          文字
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default SystemText
