<template>
  <div class="toast"></div>
</template>
<script>
import Vue from 'vue'
Vue.prototype.$toast = function(){
  console.log('我是 toast')
}
export default {
  name: 'WheelToast'
}
</script>
<style lang="scss" scoped>

</style>


