<template>
  <div class="collapseItem">
    <div class="title" @click="toggle" :data-name="name">
      {{title}}
    </div>
    <div class="content" ref="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "WheelCollapseItem",
    props: {
      title: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        open: false,
      }
    },
    inject: ['eventBus'],
    mounted () {
      //儿子会监听eventbus 只要爸爸说儿子更新 儿子就会更新
      this.eventBus && this.eventBus.$on('update:selected', (names) => {
        if (names.indexOf(this.name) >= 0) {
          this.open = true
        } else {
          this.open = false
        }
      })
    },
    methods: {
      toggle () {
        if (this.open) {
          //触发的一个意图 用户打算移除一个item
          this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
        } else {
          //用户打算添加一个选中
          this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
        }
      },
    },
  }
</script>

<style scoped lang="scss">
  $grey: #ddd;
  $border-radius: 4px;
  .collapseItem {
    > .title { border: 1px solid $grey; margin-top: -1px; margin-left: -1px; margin-right: -1px;
      min-height: 32px; display: flex; align-items: center; padding: 0 8px;
      background: lighten($grey, 8%);
    }
    &:first-child {
      > .title { border-top-left-radius: $border-radius; border-top-right-radius: $border-radius; }
    }
    &:last-child {
      > .title:last-child { border-bottom-left-radius: $border-radius; border-bottom-right-radius: $border-radius; }
    }
    > .content { padding: 8px; }
  }
</style>