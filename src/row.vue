<template>
  <div class="row"
  :style="rowStyle">
   <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'WheelRow',
  props: {
    gutter: {
      type: [String, Number]
    }
  },
  computed: {
    rowStyle(){
      // 解构
      let {gutter} = this
      return { marginLeft: -gutter/2 + 'px', marginRight: -gutter/2 + 'px' }
    }
  },
  mounted() {
    // 父子传值
    this.$children.forEach(vm => {
      vm.gutter = this.gutter
    })
  },
}
</script>
<style lang="scss" scoped>
.row{
    display: flex;
  }
</style>


