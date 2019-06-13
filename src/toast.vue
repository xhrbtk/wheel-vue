<template>
  <div class="toast" ref="toast">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>
<script>
export default {
  name: 'WheelToast',
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 50
    },
    closeButton: {
      type: Object,
      default() {
          return {
            text: '关闭', calback: undefined
          }
        }
    },
    enableHtml: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.updateStyles()
    this.execAutoClose()
  },
  created () {

  },
  methods: {
    updateStyles () {
      this.$nextTick(() => {
        this.$refs.line.style.height = this.$refs.toast.getBoundingClientRect().height + 'px'
      })
    },
    execAutoClose () {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoClose * 1000)
      }
    },
    close(){
      this.$el.remove() //把元素remove掉
      this.$destroy()  //死掉
    },
    onClickClose(){
      this.close()
      if(this.closeButton && typeof this.closeButton.callback === 'function'){
        this.closeButton.callback()
      }
      this.closeButton.callback(this) //this === toast实例
    }
  }
}
</script>
<style lang="scss" scoped>

$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0,0,0,0.75);
.toast{
  font-size: $font-size;
  line-height: 1.8;
  min-height: $toast-min-height;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,50);
  color: #fff;
  padding: 0px 16px;
  .message{
    padding: 4px 0;
  }
  .close{
    padding-left: 16px;
    cursor: pointer;
    flex-shrink: 0; //不缩放
  }
  .line{
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
}
</style>


