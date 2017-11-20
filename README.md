# vue-todo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 安装Less

* npm i less less-loader -save-dev
* 配置loader

``` JSON
    {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader",
    }
```