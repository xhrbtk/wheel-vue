<template>
  <div class="tabs-item" @click="xxx">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'wheelTabsItem',
  inject: ['eventBus'],
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
    console.log('爷爷给item的eventBus')
    console.log(this.eventBus)
    this.eventBus.$on('updata:selected', (name) => {
      console.log(name)
    })
  }
}
</script>
<style lang="scss" scoped>
.tabs-item{

}
</style>

