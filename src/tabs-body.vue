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
  }
}
</script>
<style lang="scss" scoped>
.tabs-body{
}
</style>