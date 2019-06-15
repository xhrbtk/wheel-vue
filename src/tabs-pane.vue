<template>
  <div class="tabs-pane">
    <slot></slot>
  </div>
</template>
<script>
export default {
  inject: ['eventBus'],
  name: 'wheelTabsPane',
  created () {
    this.eventBus.$on('updata:selected', (name) => {
      console.log(name)
    })
  }
}
</script>
<style lang="scss" scoped>
.tabs-pane{

}
</style>

