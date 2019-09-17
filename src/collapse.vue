
<template>
 <div class="collapse">
   <slot></slot>
 </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'WheelCollapse',
  props: {
    single: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      eventBus: new Vue()
    }
  },
  provide() {
    if(this.single){
      return {
        eventBus: this.eventBus
      }
    }
  }

}
</script>
<style lang="scss" scoped>
  $gray: #ddd;
  $border-radius: 4px;
  .collapse{
    border: 1px solid $gray;
    border-radius: $border-radius;
    margin: 100px;
    border-bottom: none;
  }
</style>


