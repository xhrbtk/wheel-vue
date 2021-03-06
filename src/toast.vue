<template>
  <div class="wrapper" :class="toastClasses">
    <div class="toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div class="line" ref="line"></div>
      <span class="close" v-if="closeButton" @click="onClickClose">
        {{closeButton.text}}
      </span>
    </div>
  </div>
</template>
<script>
  //构造组件的选项
  export default {
    name: 'WheelToast',
    props: {
      autoClose: {
        type: [Boolean, Number],
        default: 5000,
        validator (value) {
          return value === false || typeof value === 'number';
        }
      },
      closeButton: {
        type: Object,
        default () {
          return {
            text: '关闭', callback: undefined  //如果默认值是一个对象 不能直接写一个对象 要return一个对象
          }
        }
      },
      enableHtml: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'top',
        validator (value) {
          return ['top', 'bottom', 'middle'].indexOf(value) >= 0
        }
      }
    },
    mounted () {
      this.updateStyles()
      this.execAutoClose()
    },
    computed: {
      toastClasses () {
        return {
          [`position-${this.position}`]: true
        }
      }
    },
    methods: {
      updateStyles () {
        this.$nextTick(() => {
          this.$refs.line.style.height = this.$refs.toast.getBoundingClientRect().height + 'px'
        })
        // 在做测试用例的时候用nextTick会出错 所以选择用setTimeout
        // setTimeout(() => {
        //   this.$refs.line.style.height = this.$refs.toast.getBoundingClientRect().height + 'px'
        // }, 800)
      },
      execAutoClose () {
        if (this.autoClose) {
          setTimeout(() => {
            this.close()
          }, this.autoClose * 1000)
        }
      },
      close () {
        this.$el.remove()
        this.$emit('close')
        this.$destroy()  //destroy 并不会把元素从页面中删除掉  所以先要执行remove将元素删除掉  之后再将其destory
      },
      onClickClose () {
        this.close()
        if (this.closeButton && typeof this.closeButton.callback === 'function') {
          this.closeButton.callback(this)//this === toast实例
        }
      }
    }
  }
</script>
<style lang="scss" scoped>

$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0,0,0,0.75);
$animation-duration: 300ms;
@keyframes slide-up {
  0% { opacity: 0; transform: translateY(100%);}
  100% { opacity: 1; transform: translateY(0);}
}
@keyframes slide-down {
  0% { opacity: 0; transform: translateY(-100%);}
  100% { opacity: 1; transform: translateY(0%);}
}
@keyframes fade-in {
  0% { opacity: 0;}
  100% { opacity: 1;}
}
.wrapper{
  z-index: 100;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);  //因为在展示动画的时候会出现先偏移后动画  用两个盒子解决 外面盒子加动画  里面盒子居中
  &.position-top{
    top: 0;
    .toast{
      animation: slide-down $animation-duration;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
  &.position-bottom{
    bottom: 0;
    .toast{
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: slide-up $animation-duration;
    }
  }
  &.position-middle{
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    .toast{
      animation: fade-in $animation-duration;
    }
  }
}
.toast{
  font-size: $font-size;
  line-height: 1.8;
  min-height: $toast-min-height;
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


