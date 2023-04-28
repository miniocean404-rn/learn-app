package com.learnapp.newarchitecture.viewmanager;


import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.learnapp.newarchitecture.view.InfoView;

import java.util.HashMap;
import java.util.Map;


// 嵌入 view 视图的使用方法：https://juejin.cn/post/7016239317567668255#heading-1
public class InfoViewManager extends SimpleViewManager<InfoView> {

    public static final String REACT_CLASS = "NativeInfoView";
    public static final int SET_SHAPE_CODE = 100;
    public static final int OTHER_CODE = 1;


    ReactApplicationContext mCallerContext;

    public InfoViewManager(ReactApplicationContext reactContext) {
        mCallerContext = reactContext;
    }

    @NonNull
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @NonNull
    @Override
    protected InfoView createViewInstance(@NonNull ThemedReactContext context) {
        return new InfoView(context);
    }

    // 设置传递的属性名
    @ReactProp(name = "avatar")
    public void setAvatar(InfoView view, String url) {
        view.setAvatar(url);
    }

    @ReactProp(name = "name")
    public void setNameText(InfoView view, String name) {
        view.setNameText(name);
    }

    @ReactProp(name = "desc")
    public void setDescText(InfoView view, String desc) {
        view.setDestText(desc);
    }

    @ReactProp(name = "num", defaultFloat = 0)
    public void setNumText(InfoView view, int num) {

        Log.i("传递的数字", getType(num));
        view.setNumText(num);
    }

    // 获取数据的类型
    private static String getType(Object data) {
        return data.getClass().toString();
    }

    // 将注册的事件暴露出去给 JS
    @Nullable
    @Override
    public Map<String, Object> getExportedCustomBubblingEventTypeConstants() {
        return MapBuilder.<String, Object>builder()
                .put(
                        "onShapeChange",
                        MapBuilder.of(
                                // 固定名字：分阶段注册名称
                                "phasedRegistrationNames",
                                // 设置为冒泡的事件
                                MapBuilder.of("bubbled", "onShapeChange")
                        )
                )
                .put(
                        "onOtherEvent",
                        MapBuilder.of(
                                // 固定名字：分阶段注册名称
                                "phasedRegistrationNames",
                                // 设置为冒泡的事件
                                MapBuilder.of("bubbled", "onOtherEvent")
                        )
                )
                .build();
    }


    // 注册原生层的命令编码
    @Nullable
    @Override
    public Map<String, Integer> getCommandsMap() {
        return MapBuilder.<String, Integer>builder()
                .put("setShape", SET_SHAPE_CODE)
                .put("other", OTHER_CODE)
                .build();
    }

    // 接受 js dispatchViewManagerCommand 发来的命令
    @Override
    public void receiveCommand(@NonNull InfoView root, String commandId, @Nullable ReadableArray args) {
        int command = Integer.parseInt(commandId);
        if (command == SET_SHAPE_CODE) {
            if (args != null && args.size() > 0) {
                // 获取 UIManager.dispatchViewManagerCommand(viewId, command, params) 中 params 数组第一个参数
                String shape = args.getString(0);
                root.setShape(shape);
            }
        } else {
            super.receiveCommand(root, commandId, args);
        }
    }
}
