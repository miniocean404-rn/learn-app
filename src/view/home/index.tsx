import GetNativeComponents, { NativeInfoView } from '@/learn/js-bridge/get-native-components'
import GetNativeContainerComponents from '@/learn/js-bridge/get-native-container-components'
import { getNativeContanst } from '@/learn/js-bridge/get-native-contanst'
import { Button, View } from 'react-native'

const Home = (): JSX.Element => {
  return (
    <View style={{ width: '100%', height: '100%' }}>
      {/* <Base></Base> */}
      {/* <SystemView></SystemView> */}
      {/* <SystemText></SystemText> */}
      {/* <SystemImage></SystemImage> */}
      {/* <SystemImageBackground></SystemImageBackground> */}
      {/* <SystemTextInput></SystemTextInput> */}
      {/* <SystemTouchableOpacity></SystemTouchableOpacity> */}
      {/* <SystemTouchableHighlight></SystemTouchableHighlight> */}
      {/* <SystemTouchableWithoutFeedback></SystemTouchableWithoutFeedback> */}
      {/* <SystemButton></SystemButton> */}
      {/* <SystemScrollView></SystemScrollView> */}
      {/* <SystemFlatList></SystemFlatList> */}
      {/* <SystemSectionList></SystemSectionList> */}
      {/* <SystemModal></SystemModal> */}
      {/* <SystemRefreshControl></SystemRefreshControl> */}
      {/* <SystemStatusBar></SystemStatusBar> */}
      {/* <SystemSwitch></SystemSwitch> */}
      {/* <SystemPressable></SystemPressable> */}

      {/* <AnimationMove></AnimationMove> */}
      {/* <AnimationLinearGardient></AnimationLinearGardient> */}
      {/* <AnimationFn></AnimationFn> */}
      {/* <AnimationTiming></AnimationTiming> */}
      {/* <AnimationValueXY></AnimationValueXY> */}
      {/* <AnimationCombined></AnimationCombined> */}
      {/* <FollowAnimation></FollowAnimation> */}
      {/* <CustomModal></CustomModal> */}
      {/* <LayoutAnimationView></LayoutAnimationView> */}

      <GetNativeContainerComponents></GetNativeContainerComponents>
      <Button
        title="按钮"
        onPress={() => {
          getNativeContanst()
        }}
      ></Button>
    </View>
  )
}

export default Home
