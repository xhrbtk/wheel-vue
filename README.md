 #wheel-vue vue的相关轮子
 作者：xhrbtk

## 使用本框架需要添加border-box

```
*{
  box-sizing: border-box;
}
```

## 安装parcel
```
  npm install -D parcel-bundler -v1.9.2
  //在运行的时候
  ./node_modules/.bin/parcel index.html
  npx parcel index.html 上面书写形式的简略版
  npx parcel index.html --no-cache 运行的时候不会再有缓存
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