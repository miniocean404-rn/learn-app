package com.learnapp.newarchitecture.rn;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.learnapp.BuildConfig;
import com.learnapp.newarchitecture.rn.utils.DeviceUtil;

import java.util.HashMap;
import java.util.Map;

public class AppModule extends ReactContextBaseJavaModule {
    public AppModule() {
        super();
    }

    public AppModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
    }

    // 注册静态常亮给 ReactNative
    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        Map map = new HashMap<String, Object>();
        map.put("versionName", BuildConfig.VERSION_NAME);
        map.put("versionCode", BuildConfig.VERSION_CODE);
        return map;
    }

    @NonNull
    @Override
    // js 获取方法就要通过这个 name
    public String getName() {
        return "App";
    }


    // 告诉 React 是 React 可以调用的方法的注解
    @ReactMethod
    public void openGallery() {
        // 所有继承 ReactContextBaseJavaModule 的子类都有 getCurrentActivity()
        // getCurrentActivity 可以获取到原生层加载的 activity
        if (getCurrentActivity() != null) {
            DeviceUtil.openGallery(getCurrentActivity());
        }
    }

    @ReactMethod
    public void getVersionName(Promise promise) {
        // buildGradle 自动生成的 BuildConfig 类
        String versionName = BuildConfig.VERSION_NAME;
        if (versionName != null) {
            promise.resolve(versionName);
        } else {
            promise.reject(new Throwable("获取版本失败"));
        }

    }
}
