<template>
  <button class="g-button">
    <slot></slot>
  </button>
</template>
<script>
</script>
<style lang="scss">
.g-button{
  font-size: var(--button-size);
  height: var(--button-height);
  padding: 0 1em; /*width*/
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  &:hover{
    border-color: var(--border-color-hover);
  }
  &:active{
    background-color: var(--button-active-bg);
  }
  &:focus{
    outline: none;
  }
}

</style>


