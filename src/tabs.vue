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
    console.log(this.selected)

    console.log(this.eventBus)

    // 这个组件必须触发一个selected值
    // this.$emit('updata:selected', 'xxx')
  },
  mounted () {
    console.log(`这是被选中${this.selected}`)
    this.eventBus.$emit('update:selected', this.selected)
  }
}
</script>
<style lang="scss" scoped>
.tabs{

}
</style>

