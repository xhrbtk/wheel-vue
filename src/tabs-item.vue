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
      this.eventBus.$emit('updata:selected', this.name)
    }
  },
  created () {
    if (this.eventBus) {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name;
      })
    }
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
  &.active{
    background: red;
  }
}
</style>

