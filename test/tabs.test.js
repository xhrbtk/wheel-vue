const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

  it('存在', () => {
    expect(Tabs).to.exist
  })
  it('子组件只能是 tabs-head 和 tabs-body', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML =
    `<g-tabs selected="finance">
      <g-tabs-head>
        <g-tabs-item name="woman">美女</g-tabs-item>
        <g-tabs-item name="finance">财经</g-tabs-item>
        <g-tabs-item name="sports">体育</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="woman">美女相关</g-tabs-pane>
        <g-tabs-pane name="finance">财经相关</g-tabs-pane>
        <g-tabs-pane name="sports">体育相关</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
    `
    console.log(div)
    let vm = new Vue({
      el: div
    })
    // console.log(vm);
    vm.$nextTick(() => {
      console.log(vm.$el.outerHTML)
      // let x = vm.$el.querySelector('.tabs-item:nth-child(2)')
      let x = vm.$el.querySelector(`.tabs-item[data-name="finance"]`)
      expect(x.classList.contains('active')).to.be.true
      done()
    })
    it('可以接受 direction prop', () => {

    })


  })
})