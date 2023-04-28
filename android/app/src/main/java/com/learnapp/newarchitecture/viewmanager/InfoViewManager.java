package com.learnapp.newarchitecture.rn.viewmanager;

import androidx.annotation.NonNull;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.learnapp.newarchitecture.view.InfoView;

public class InfoViewManager extends SimpleViewManager<InfoView> {

    public static final String REACT_CLASS = "NativeInfoView";

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
}
