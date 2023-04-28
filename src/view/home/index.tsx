import { getNativeContanst } from '@/learn/js-bridge/get-native-contanst'
import { useNativeMethod } from '@/learn/js-bridge/use-native-method'
import { Button } from 'react-native'

const Home = (): JSX.Element => {
  return (
    <>
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

      <Button
        title="按钮"
        onPress={() => {
          getNativeContanst()
        }}
      ></Button>
    </>
  )
}

export default Home
