<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>
<script>
export default {
  inject: ['eventBus'],
  name: 'wheelTabsBody',
  created () {
    console.log(this.eventBus)

    console.log('爷爷给body的eventbus')

  }
}
</script>
<style lang="scss" scoped>
.tabs-body{

}
</style>

