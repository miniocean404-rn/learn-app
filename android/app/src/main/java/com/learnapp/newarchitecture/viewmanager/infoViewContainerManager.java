package com.learnapp.newarchitecture.viewmanager;


import androidx.annotation.NonNull;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.learnapp.newarchitecture.view.InfoViewContainer;

public class infoViewContainerManager extends ViewGroupManager<InfoViewContainer> {
    public final String CONTAINER_NAME = "NativeInfoViewContainer";

    @NonNull
    @Override
    public String getName() {
        return CONTAINER_NAME;
    }

    @NonNull
    @Override
    protected InfoViewContainer createViewInstance(@NonNull ThemedReactContext context) {
        return new InfoViewContainer(context);
    }
}
