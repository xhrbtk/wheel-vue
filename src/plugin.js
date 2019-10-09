import Toast from './toast'

let currentToast

export default{
  install(Vue, options){
    Vue.prototype.$toast = function(message, toastOptions){
      // 动态创建实例 生成一个toast组件
      if(currentToast){
        // 如果当前已经有一个toast 当再次点击的时候 将当前的关掉之后再生成新的toast
        currentToast.close()
      }
      currentToast = createToast({
        Vue,
        message,
        propsData: toastOptions,
        onClose: () => {
          console.log('关闭了')
          currentToast = null
        }
      }) //es6语法
    }
  }
}


// heplers  生成toast
//{} es6语法传值
function createToast({ Vue, message, propsData, onClose }) {
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({ propsData })
  toast.$slots.default = [message]  //给toast传了一个默认插槽
  toast.$mount()  //如果将slot放在mount之前 那么实例的所有方法都不会执行
  // 回调函数 如果已经手动关闭了 执行回调
  toast.$on('close', onClose)
  document.body.appendChild(toast.$el)
  return toast
}


//使用plugin是因为1.避免他把vue配到另一个轮子上面 我们就import不到vue了
                //2. $toast可能会覆盖现有的东西，但是我不确定能不能覆盖，用户自己use 出问题是用户的事儿