package com.learnapp;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.os.PersistableBundle;
import android.util.Log;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;


public class LinkJumpActivity extends AppCompatActivity {
    @Override

    // 在这个方法中调用setContentView方法不能设置布局
    // public void onCreate(Bundle savedInstanceState, PersistableBundle persistentState) {
    protected  void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

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

            Log.i('日志',name)
        }

        // sendIntent 方式
        // 获取隐式跳转 intent 的参数
        String name = intent.getStringExtra("name");
        if (name != null) {
            tv.setText("隐式跳转-姓名" + name);
            Log.i('日志',name)
        }
    }
}
