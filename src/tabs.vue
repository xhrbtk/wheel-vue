<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'wheelTabs',
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator (value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      }
    }
  },
  data () {
    return {
      eventBus: new Vue()
    }
  },
  provide () {
    return {
      eventBus: this.eventBus
    }
  },
  created () {
    // 这个组件必须触发一个selected值
    // this.$emit('updata:selected', 'xxx')
  },
  mounted () {
    console.log(this.$children);
    this.$children.forEach((vm) => {
      // console.log(vm.$options.name);
      if(vm.$options.name === 'wheelTabsHead'){
        vm.$children.forEach((item) => {
          if(item.$options.name === 'wheelTabsItem' && item.name === this.selected){
            // console.log(item.$el)
            this.eventBus.$emit('update:selected', this.selected, item)
          }
        })
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.tabs{
}
</style>