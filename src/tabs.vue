<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
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
  created () {
    // 这个组件必须触发一个selected值
    // this.$emit('updata:selected', 'xxx')
  }
}
</script>
<style lang="scss" scoped>
.tabs{

}
</style>

