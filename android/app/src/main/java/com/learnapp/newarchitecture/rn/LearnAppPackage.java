package com.learnapp.newarchitecture.rn;

import androidx.annotation.NonNull;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.learnapp.newarchitecture.rn.module.AppModule;
import com.learnapp.newarchitecture.viewmanager.InfoViewManager;

import java.util.ArrayList;
import java.util.List;

public class LearnAppPackage implements ReactPackage {
    @NonNull
    @Override
    public List<NativeModule> createNativeModules(@NonNull ReactApplicationContext context) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new AppModule(context));
        return modules;
    }

    @NonNull
    @Override
    public List<ViewManager> createViewManagers(@NonNull ReactApplicationContext context) {
        List<ViewManager> views = new ArrayList<>();
        
        views.add(new InfoViewManager(context));
        return views;
    }
}
