package com.learnapp.newarchitecture.rn.view;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.LinearLayout;

import com.learnapp.R;

public class InfoView extends LinearLayout {
    public InfoView(Context context) {
        super(context);
        initView();
    }

    private void initView() {
        // infoView 就有了 XML 中的内容了
        LayoutInflater inflater = LayoutInflater.from(getContext());
        View view = inflater.inflate(R.layout.layout_info_view, null);
        LayoutParams lp = new LayoutParams(
                LayoutParams.MATCH_PARENT,
                LayoutParams.MATCH_PARENT
        );
        this.addView(view, lp);
    }
}
