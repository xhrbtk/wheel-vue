<template>
  <div class="row"
  :style="rowStyle"
  :class="rowClass"
  >
   <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'WheelRow',
  props: {
    gutter: {
      type: [String, Number]
    },
    align: {
      type: String,
      validator(value){
        return ['left', 'right', 'center'].includes(value)
      }
    }

  },
  computed: {
    rowStyle(){
      // 解构
      let {gutter} = this
      return { marginLeft: -gutter/2 + 'px', marginRight: -gutter/2 + 'px' }
    },
    rowClass(){
      let {align} = this
      return [align && `align-${align}`]
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
    &.align-left{
      justify-content: flex-start;
    }
    &.align-center{
      justify-content: center;
    }
    &.align-right{
      justify-content: flex-end;
    }
  }
</style>


