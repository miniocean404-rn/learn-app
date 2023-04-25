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
