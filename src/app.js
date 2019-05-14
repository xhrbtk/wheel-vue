import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('g-button',Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)


new Vue({
    el: "#app",
    data: {
      loading1: false,
      loading2: false,
      loading3: false
    },
    methods: {
      inputChange(e){
        console.log(e.target.value)
      }
    }
})

// 单元测试
// import chai from 'chai'
// import spies from 'chai-spies'
// chai.use(spies)

// const expect = chai.expect
// {
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData: {
//       icon: 'shezhi'
//     }
//   })
//   vm.$mount()
//   let useElement = vm.$el.querySelector('use')
//   expect(useElement.getAttribute('xlink:href')).to.eq('#i-shezhi')
// }

// {
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData: {
//       icon: 'shezhi',
//       loading: true
//     }
//   })
//   vm.$mount()
//   let useElement = vm.$el.querySelector('use')
//   expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
// }

// {
//   const div = document.createElement('div')
//   document.body.appendChild(div)
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData: {
//       icon: 'shezhi',
//     }
//   })
//   vm.$mount(div)
//   let svg = vm.$el.querySelector('svg')
//   let {order} = window.getComputedStyle(svg)
//   expect(order).to.eq("1")
//   vm.$el.remove()
//   vm.$destroy()
// }

// {
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData: {
//       icon: 'shezhi',
//     }
//   })
//   vm.$mount()
//   let spy = chai.spy(() => {

//   })
//   vm.$on('click', spy)
//   // 希望函数被调用
//   let button = vm.$el
//   button.click()
//   // 期望间谍被调用
//   expect(spy).to.have.been.called()
// }

