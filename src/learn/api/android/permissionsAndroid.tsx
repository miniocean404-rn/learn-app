import { PermissionsAndroid } from 'react-native'

// 安卓 6.0 之后权限需要动态申请,并不是不用写权限了，而是动态申请，但是还是要注册
// ! 切记一定要在 AndroidManifest.xml 中注册权限
export const UsePermissionsAndroid = async () => {
  const needPermission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE

  // 所有动态申请权限的字符串数组
  PermissionsAndroid.PERMISSIONS
  await PermissionsAndroid.check('android.permission.WRITE_EXTERNAL_STORAGE')
  const checkRes = await PermissionsAndroid.check(needPermission)
  if (!checkRes) {
    const reqRes = await PermissionsAndroid.request(needPermission)

    // GRANTED: 'granted'， 表示用户已授权
    // DENIED: 'denied'， 表示用户已拒绝
    // NEVER_ASK_AGAIN: 'never_ask_again'，表示用户已拒绝，且不愿被再次询问。
    if (reqRes === PermissionsAndroid.RESULTS.GRANTED) {
    }
  }

  // 申请多个权限
  PermissionsAndroid.requestMultiple([
    // 读写权限只需要申请一个就好
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
  ])
}
