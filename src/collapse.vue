
<template>
 <div class="collapse">
   <slot></slot>
 </div>
</template>
<script>

export default {
  name: 'WheelCollapse',
  data(){
    return {
      
    }
  },

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


