package com.learnapp.newarchitecture.view;

import static com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions.withCrossFade;

import android.content.Context;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;


import com.bumptech.glide.Glide;
import com.bumptech.glide.Priority;
import com.bumptech.glide.load.engine.DiskCacheStrategy;
import com.bumptech.glide.load.resource.bitmap.CircleCrop;
import com.bumptech.glide.load.resource.bitmap.RoundedCorners;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.learnapp.R;

import java.util.Objects;

// 原生组件带属性及回调方法
public class InfoView extends LinearLayout implements View.OnClickListener {

    ImageView avatarImg;
    TextView nameText;
    TextView destText;

    TextView numText;
    TextView changeButton;

    private String shape = "circle"; // round circle

    private String url = "";


    public InfoView(Context context) {
        super(context);
        initView();
    }

    private void initView() {
        // infoView 就有了 XML 中的内容了
        LayoutInflater inflater = LayoutInflater.from(getContext());
        View view = inflater.inflate(R.layout.layout_info_view, null);

        // 类似 js 找到 DOM
        avatarImg = view.findViewById(R.id.icon_avatar);
        nameText = view.findViewById(R.id.txt_name);
        destText = view.findViewById(R.id.txt_desc);
        numText = view.findViewById(R.id.txt_number);
        changeButton = view.findViewById(R.id.change_button);


        changeButton.setOnClickListener(this);

        LayoutParams lp = new LayoutParams(
                LayoutParams.MATCH_PARENT,
                LayoutParams.MATCH_PARENT
        );
        this.addView(view, lp);
    }


    // app/build.gradle dependencies 中添加 Glide 库
    public void setAvatar(String url) {
        this.url = url;

        Glide.with(this)
                .load(this.url)
                // 设置占位符图片
                .placeholder(R.drawable.icon_avatar)
                //设置加载失败后的图片显示
                .error(R.drawable.icon_avatar)
                //缓存策略,跳过内存缓存【此处应该设置为false，否则列表刷新时会闪一下】
                .skipMemoryCache(false)
                //缓存策略,硬盘缓存-仅仅缓存最终的图像，即降低分辨率后的（或者是转换后的）
                .diskCacheStrategy(DiskCacheStrategy.ALL)
                // 变换：设置图片形状
                .transform(new CircleCrop())
                //默认淡入淡出动画
                .transition(withCrossFade())
                //设置图片加载的优先级
                .priority(Priority.HIGH)
                .into(avatarImg);
    }

    public void setNameText(String name) {
        nameText.setText(name);
    }

    public void setDestText(String desc) {
        destText.setText(desc);
    }

    public void setNumText(int num) {
        numText.setText(String.valueOf(num));
    }

    @Override
    public void onClick(View v) {
        if (this.shape == "circle") {
            this.shape = "round";
        } else {
            this.shape = "circle";
        }

        Glide.with(this)
                .load(this.url)
                // 设置占位符图片
                .placeholder(R.drawable.icon_avatar)
                //设置加载失败后的图片显示
                .error(R.drawable.icon_avatar)
                //缓存策略,跳过内存缓存【此处应该设置为false，否则列表刷新时会闪一下】
                .skipMemoryCache(false)
                //缓存策略,硬盘缓存-仅仅缓存最终的图像，即降低分辨率后的（或者是转换后的）
                .diskCacheStrategy(DiskCacheStrategy.ALL)
                //默认淡入淡出动画
                .transition(withCrossFade())
                //设置图片加载的优先级
                .priority(Priority.HIGH)
                // 变换：设置图片形状
                .transform(this.shape == "circle" ? new CircleCrop() : new RoundedCorners(40))
                .into(avatarImg);


        // 给事件的添加参数
        WritableMap event = Arguments.createMap();
        event.putString("shape", this.shape);

        // 发送事件
        // 1. 获取 js 上下文从 js 模块中添加事件
        ReactContext context = (ReactContext) getContext();
        context.getJSModule(RCTEventEmitter.class).receiveEvent(
                getId(),
                "onShapeChange",
                event
        );
    }


    public void setShape(String shape) {
        this.shape = shape;

        Glide.with(this)
                .load(this.url)
                // 设置占位符图片
                .placeholder(R.drawable.icon_avatar)
                //设置加载失败后的图片显示
                .error(R.drawable.icon_avatar)
                //缓存策略,跳过内存缓存【此处应该设置为false，否则列表刷新时会闪一下】
                .skipMemoryCache(false)
                //缓存策略,硬盘缓存-仅仅缓存最终的图像，即降低分辨率后的（或者是转换后的）
                .diskCacheStrategy(DiskCacheStrategy.ALL)
                //默认淡入淡出动画
                .transition(withCrossFade())
                //设置图片加载的优先级
                .priority(Priority.HIGH)
                // 变换：设置图片形状
                .transform(this.shape == "circle" ? new CircleCrop() : new RoundedCorners(40))
                .into(avatarImg);
    }
}
