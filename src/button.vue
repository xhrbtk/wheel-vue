<template>
  <button class="g-button"
  :class="{[`icon-${iconPosition}`]: true}"
  @click="$emit('click')"
  >
  <!-- $emit 触发组件的点击事件 -->
    <g-icon :name="icon" v-if="icon && !loading" class="icon"></g-icon>
    <g-icon name="loading" class="loading icon" v-if="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
// 为了测试用例运行成功 --开始
// import Vue from 'vue'
import Icon from './icon'
// Vue.component('g-icon', Icon)
// 为了测试用例运行成功 --结束

export default{
  // props: ['icon', 'iconPosition']
  components: {
    'g-icon': Icon
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      // 属性检查器
      validator(value){
        return value === 'left' || value === 'right'
      }
    }
  }
}
</script>
<style lang="scss">
  @keyframes spin {
    // icon动画
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .g-button { font-size: var(--font-size); height: var(--button-height); padding: 0 1em;
    border-radius: var(--border-radius); border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex; justify-content: center; align-items: center;
    vertical-align: middle;  //解决按钮不对齐的
    &:hover { border-color: var(--border-color-hover); }
    &:active { background-color: var(--button-active-bg); }
    &:focus { outline: none; }
    > .content { order: 2; }
    > .icon { order: 1; margin-right: .1em;}
    &.icon-right {
      > .content { order: 1;}
      > .icon { order: 2; margin-right: 0; margin-left: .1em;}
    }
    .loading {
      animation: spin 2s infinite linear;
    }
  }

</style>


