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









## 安装parcel
```
  npm install -D parcel-bundler -v1.9.2
  //在运行的时候
  ./node_modules/.bin/parcel index.html
  npx parcel index.html 上面书写形式的简略版
  npx parcel index.html --no-cache 运行的时候不会再有缓存
  npm start  -- 已经在package.json里面设置过
```

## 工具知识 webpack parcel scss less babel
## 语言特性 promise async 深入
## 抽象 代码组织 流程 设计模式 迭代

## slot 插槽工具

## BDD Behavior driven development 行为驱动开发
## TDD Test driven development  测试驱动开发
## Assert 断言 （我主观认为）
## 安装断言 npm i -D chai
## vue 单元测试  就是你传一个输入 得到一个输出
## chai-spies mock数据

## karma 是一个测试运行期，它可以呼起浏览器，加载测试脚本，然后运行测试用例
## mocha 是一个单元测试框架/库，它可以用来写测试用例
## sinon是一个spy/stub/mock库，用以辅助测试（使用后才能理解）
## rm -rf .cache dist  删掉残渣
## 单元测试一定要使用作用域隔离和断言
## describe it 描述什么东西可以做什么事情
## expect(xxx).to.eq(yyy)
## npm run test 会自动打包js 打开浏览器 输入网址 运行测试用例 关闭浏览器  将浏览器的结果显示在终端

## 解决问题的关键是加快解决问题的效率
## 单文件组件--parcel打包--单元测试--自动测试（karma mocha chai）-- 持续集成（Travis ci/circle i）-- package.json(发布)（dist/index.js,dist/index.css）-- yarn link 和 npm link 提高开发速度


## 设置淘宝镜像源
## npm config set registry https://registry.npm.taobao.org --global
## npm config set disturl https://npm.taobao.org/dist --global

#### 轮子的使用方式
  ## 安装： npm i wheel-vue
  ## 引入： import { Button, ButtonGroup, Icon} from 'wheel-vue' 注册
  ## 如果希望引入的轮子有样式,添加如下代码

  ##
  1. c不能运行
  2. A能运行
  3. git reset --hard A
  4. 二分法 (A+C)/2

## git branch 的用法
当前所处的那个地方就是Head
## 使用scss的for循环


##墨菲定律  小概率事件必将发生

##Vue 的单项数据流是指  父组件可以向子组件传递数据，但是子组件不能修改父组件传递过来的数据
##因为如果子组件可以修改父组件传递过来的数据的话，在父组件传递给子组件的数据是一个对象的时候，子组件一旦对父组件传递过来
##的对象进行了修改就会造成父组件的数据对象的修改，造成其他使用这个对象数据的都进行了修改。 所以子组件不能修改父组件传递过来的数据
##子组件可以将父组件传递过来的数据在data中clone一份进行修改
## beforeCreate: 此时的$el和data都为undefined，没有初始化
## created: 此时的data初始化了，而$el没有初始化
## beforeMount: 挂载之前，$el和data都初始化了
## Mounted：Vue实例挂载完成  beforeMount和Mounted之间的区别在于，挂载前$el的值为'虚拟的'元素节点，挂载后'虚拟的节点'被真是的dom节点替换
## vm.data='更新后' ====》》》 当data数据变化时只会触发updata
## app.$destroy 执行完destory操作，data里的数据没有变化，但是dom结构还村子，也就是Vue实例不再受控制了完成了解耦

## provide/inject: 在父组件中通过provider来提供变量，然后在子组件中通过inject来注入变量
## 不论子组件有多深，只要调用了inject那么就可以注入provieder中的数据。而不是只局限于只能从当前父组件的prop属性来获取数据

## props和data区别  如果需要用户（前端开发者）传值 就用props  如果不需要用户传值 自定义就用data


