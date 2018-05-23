# pure webpack starter kit
这是一个没有框架依赖的webpack4脚手架，纯html、css、js项目，参照webpack文档搭建，自己也是学习了一遍。
适合用于开发不使用Vue或者React的简单静态页面项目，打包结果为一个html，一个css，一个js。

## 使用
### 安装
1. 克隆 or 下载本项目到本地 git clone git@github.com:Topppy/pureWebpackStarterKit.git

2. yarn install 安装依赖

### 开发

yarn start 启动项目 地址 http://localhost:5000/

### 发布

yarn build 打包压缩文件到dist／目录

## 特性

- HMR：开发热更新
- webpack-merge：基础配置文件webpack.common.js 在此基础上分别配置 ‘development’ 和 ‘production’ 两种mode的webpack参数
- tree shaking：打包丢弃无用代码
- css minify：css压缩
- cssnext：可以使用css的新特性
- babel：可以使用ES6、 ES7语法
- eslint： 采用airbnb的base配置来规范js代码
- stylelint： 采用stylelint-config-standard规范css代码
- autoprefixer： 根据browserlist添加浏览器兼容前缀
- pre-commit：提交代码前lint代码修改
- profile: webpack打包性能分析
- happyPack: 打包速度优化

## 结构

```
├── README.md
├── index.html           // html文件模板
├── src
│   ├── img              // 图片资源
│   ├── index.js         // js文件入口
│   ├── style.css        // css文件入口
│   └── utils.js         // 通用函数
├── package-lock.json
├── package.json
├── postcss.config.js
├── stats.json
├── node_modules
├── webpack.common.js   // webpack通用配置
├── webpack.dev.js      // webpack开发配置
├── webpack.prod.js     // webpack打包配置
└── yarn.lock
```

## 问题

1. webpack dev server fix 到版本3.1.0是因为，3.1.1和3.1.2 的bug导致HMR not work，[issues](https://github.com/webpack/webpack-dev-server/issues/1366). 如果新版本fix了这个问题，那就可以更新到新版本。

2. 没有添加任何polyfill，可以根据自己的需要自行添加

