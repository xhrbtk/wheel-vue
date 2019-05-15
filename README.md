 #wheel-vue vue的相关轮子

[![Build Status](https://travis-ci.org/xhrbtk/wheel-vue.svg?branch=master)](https://travis-ci.org/xhrbtk/wheel-vue)

## 介绍
这是我在学习 Vue 过程中做的一个UI框架，希望对你有用。
## 开始使用

1.安装

使用本框架需要添加border-box

  ```
  *, *::before, *::after{
    box-sizing: border-box;
  }
  ```
IE 8 及以上浏览器都支持此样式

你还需要设置默认颜色等变量（后续会改为 SCSS 变量）

  ```
  html{
      --button-height: 32px;
      --font-size: 14px;
      --button-bg: white;
      --button-active-bg: #eee;
      --border-radius: 4px;
      --color: #333;
      --border-color: #999;
      --border-color-hover: red;
    }
  ```
IE 15 及以上浏览器都支持此样式

2. 安装wheel-vue

  ```
  npm i --save wheel-vue
  ```
3. 引入wheel-vue

  ```
  import { Button, ButtonGroup, Icon} from 'wheel-vue'
  import 'wheel-vue/dist/index.css'

  export default {
    name: 'app',
    components: {
      'g-button': Button
    }
  }
```




## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

