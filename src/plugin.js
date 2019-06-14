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
      currentToast = createToast({ Vue, message, propsData: toastOptions }) //es6语法
    }
  }
}


// heplers  生成toast
function createToast({ Vue, message, propsData }) {
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({ propsData })
  toast.$slots.default = [message]
  toast.$mount()
  document.body.appendChild(toast.$el)
  return toast
}
