<template>
  <div class="tabs-head">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>
<script>
export default {
  name: 'wheelTabsHead',
  inject: ['eventBus'],
  created () {
    console.log('爷爷给head的eventBus');

    console.log(this.eventBus)

  }
}
</script>
<style lang="scss" scoped>
.tabs-head{

}
</style>

