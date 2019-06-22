<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'wheelTabsItem',
  inject: ['eventBus'],
  data () {
    return {
      active: false
    }
  },
  // props相当于函数传参  data相当于函数内部自定义的数据
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String|Number,
      required: true
    }
  },
  methods: {
    xxx () {
      this.eventBus.$emit('update:selected', this.name)
    }
  },
  created () {
    this.eventBus.$on('update:selected', (name) => {
      console.log(this.name + '被选中了')
      this.active = name === this.name
    })
  },
  computed: {
    classes() {
      return {
        active: this.active
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.tabs-item{
  flex-shrink: 0;
  padding: 0 2em;
  cursor: pointer;
  border: 1px solid green;
  height: 100%;
  display: flex;
  align-items: center;
  &.active{
    background: red;
  }
}
</style>