# 学习

### 启动项目

先启动 `react-native start`再启动 `android` 就不会产生新的终端

### Android 变种

命令

```json
    "android-dev-debug": "react-native run-android --variant=devDebug",
    "android-prd-debug": "react-native run-android --variant=prdDebug",
```

```js
    // 变种
    flavorDimensions "type"
    productFlavors {
        //  设置 res/values/strings 中的 <string name="app_name">LearnApp</string>
        //  设置的是包名
        //  react-native run-android --variant=devDebug 指的是 productFlavors dev 和 buildTypes 的Debug
        dev{
            resValue("string","app_name","测试包")
        }

        prd{
            resValue("string","app_name","生产包")
        }
    }
```

### 开启 Hermes

`app:gradle` 中添加以下代码开启 Hermes 减少 10% 包体积

```gradle
 project.ext.react = [
    enableHermes: true
 ]
```

### 全局 Ts 声明

根目录下创建任意`.d.ts`文件写上声明

### Babel

```js
module.exports = {
  // 很多插件以及配置绑定一起为一个包，就是预设 presets，引用即使用
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // babel-plugin-module-resolver 配置路径别名
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': ['./src'],
        },
      },
    ],
  ],
}
```

### Ref 转发 + 函数式 Ref 调用内部函数

```js
export interface CustomRef {
  beUsed: () => void;
}

const APIUseFn = () => {
  const classRef = useRef < ClassRefFnDirectUse > null
  const UseImperativeHandleRef = useRef < CustomRef > null

  const onPress = () => {
    classRef.current?.beUsed()
    UseImperativeHandleRef.current?.beUsed()
  }

  return (
    <>
      <UseImperativeHandleApi ref={UseImperativeHandleRef}></UseImperativeHandleApi>
      <ClassRefFnDirectUse ref={classRef}></ClassRefFnDirectUse>
    </>
  )
}

// 函数式组件需要 forwardRef 传递 Ref 并且使用 useImperativeHandle 给外部 Ref 添加内部方法
const UseImperativeHandleApi = forwardRef((props, ref): ReactElement => {
  const beUsed = () => {
    console.log(props)
  }

  // 为传入的 Ref.current 添加数据供外部使用
  useImperativeHandle(ref, () => ({ beUsed }), [])

  return <Text></Text>
})

// 类组件直接传递 ref 调用内函数
class ClassRefFnDirectUse extends Component {
  beUsed = () => {}

  render() {
    return <div>ClassRefFnDirectUse</div>
  }
}
```

### HOC typescript 定义

```js
import React from 'react'

// D  继承了 BaseFieldProps，说明待处理的组件上至少得具有 BaseFieldProps 定义的这几个参数
// F 说明处理后的组件上至少得具有 F 定义的这几个参数
// 而 F & Omit<D, keyof BaseFieldProps> 这一步操作则是将
// 将前面传入的泛型 D 中的 BaseFieldProps 取差集，再与 F 取并集，最终返回的组件类型为 F + D - BaseFieldProps。
const HocType = <D extends BaseProps, F>(Component: React.FC<D & F>, argument: F) => {
  const HOCView: React.FC<F & D> = (props) => {
    return <Component {...{ ...props, ...argument }} />
  }
  return HOCView
}
```

### 原生安卓注册 scheme 和 隐式报名跳转 intent

1. 安卓原生 `app/src/main/java/com/learnapp/` 创建一个 activety

   ```java
      package com.learnapp;

      import android.content.Intent;
      import android.net.Uri;
      import android.os.Bundle;
      import android.os.PersistableBundle;
      import android.widget.TextView;

      import androidx.annotation.Nullable;
      import androidx.appcompat.app.AppCompatActivity;


      public class LinkJumpActivity extends AppCompatActivity {
          @Override
          public void onCreate(@Nullable Bundle savedInstanceState, @Nullable PersistableBundle persistentState) {
              super.onCreate(savedInstanceState, persistentState);

              setContentView(R.layout.activity_link_jump);

              TextView tv = findViewById(R.id.tv_link_jump);
              tv.setText("目标页面");

              // openUrl 方式
              // 获取 scheme 参数
              Intent intent = getIntent();
              Uri data = intent.getData();
              if (data != null) {
                  String name = data.getQueryParameter("name");
                  tv.setText("scheme跳转-姓名" + name);
              }

              // sendIntent 方式
              // 获取隐式跳转 intent 的参数
              String name = intent.getStringExtra("name");
              if (name != null) {
                  tv.setText("隐式跳转-姓名" + name);
              }
          }
      }
   ```

2. 在`app/src/main/res/layout`创建 layout,并且添加按钮

   ```xml
    <?xml version="1.0" encoding="utf-8"?>
    <LinearLayout
      xmlns:android="http://schemas.android.com/apk/res/android"
      android:orientation="vertical"
      android:layout_width="match_parent"
      android:layout_height="match_parent"
      android:padding="16dp"
      >

      <TextView
          android:id="@+id/tv_link_jump"
          android:layout_width="wrap_content"
          android:layout_height="wrap_content"
          android:textSize="20sp"
          android:textColor="#303030"
          android:textStyle="bold"
          android:text="直接在按钮上设置文字"
          />
    </LinearLayout>
   ```

3. `app/src/main/AndroidManifest.xml` 注册 scheme

```xml
        <!--原生安卓注册 intent-->
        <activity
            android:name=".LinkJumpActivity"
            android:exported="true">
            <!-- 原生隐式跳转 -->
            <intent-filter>
                <!-- 必须指定 <category android:name="android.intent.category.DEFAULT" /> -->
                <category android:name="android.intent.category.DEFAULT" />

                <!-- 这个路径是自定义的 com.learnapp.link_jump_test 会跳转到 .LinkJumpActivity 中-->
                <action android:name="com.learnapp.link_jump_test"/>
            </intent-filter>

            <!-- 原生 scheme 跳转 -->
            <intent-filter>
                <action android:name="android.intent.action.VIEW" />
                <!-- 必须指定 <category android:name="android.intent.category.DEFAULT" /> -->
                <category android:name="android.intent.category.DEFAULT" />
                <category android:name="android.intent.category.BROWSABLE" />
                <data android:scheme="test" android:host="demo" />
            </intent-filter>
        </activity>
```
