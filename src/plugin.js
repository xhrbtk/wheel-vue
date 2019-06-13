import Toast from './toast'
export default{
  install(Vue, options){
    Vue.prototype.$toast = function(message, toastOptions){
      // 动态创建实例 生成一个toast组件
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor({
        propsData: {
          enableHtml: toastOptions.enableHtml,
          closeButton: toastOptions.closeButton,
          autoClose: toastOptions.autoClose,
          position: toastOptions.position
        }
      })
      console.log(toastOptions)
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}