<template>
  <div class="wrapper" :class="{'error': error}">
    <input :value="value" type="text" :disabled="disabled" :readonly="readonly">
    <template v-if="error">
      <icon name="error" class="icon-error"></icon>
      <span class="error-message">{{error}}</span>
    </template>
  </div>
</template>

<script>
import Icon from './icon'
export default {
  components: {
    Icon
  },
  // name 是用来调试的
  name: 'WheelInput',
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
}
</script>
<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0,0,0,.5);
$red: #f1453D;
.wrapper{
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > *{
    margin-right: 0.5em;
    &:last-child{
      margin-right: 0;
    }
  }
  &.error{
    >input {
      border-color: $red;
    }
  }
  > input{
    height: 32px;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 0 8px;
    font-size: inherit;
    &:hover{
      border-color: $border-color-hover;
    }
    &:focus{
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled],&[readonly]{
      border-color: #ccc;
      color: #ccc;
      cursor: not-allowed;
    }
  }
  .icon-error{
    fill: $red;
  }
  .error-message{
    color: $red;
  }
}
</style>


