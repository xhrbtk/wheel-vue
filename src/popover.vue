<template>
  <div class="popover" @click="onClick" ref="popover">
    <!-- @click.stop 阻止冒泡 -->
    <div ref="contentWrapper" class="content-wrapper" v-if="visible" :class="{[`position-${position}`]:true}">
      <slot name="content"></slot>
    </div>
    <!-- slot不支持ref -->
    <span ref="triggerWrapper" style="display:inline-block;"><slot ></slot></span>
  </div>
</template>
<script>
export default {
  name: 'WheelPopover',
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value){
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
      }
    }
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    positioncontent(){
      const {contentWrapper, triggerWrapper} = this.$refs
      document.body.appendChild(contentWrapper)
      const {width, height, top, left} = triggerWrapper.getBoundingClientRect()
      const {height: height2} = contentWrapper.getBoundingClientRect()
      let positions = {
        top: {top: top + window.scrollY, left: left + window.scrollX,},
        bottom: {top: top + height + window.scrollY, left: left + window.scrollX},
        left: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX
        },
        right: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX + width
        },
      }
      contentWrapper.style.left = positions[this.position].left + 'px'
      contentWrapper.style.top = positions[this.position].top + 'px'

    },
    onClickDocument(e){
      // 如果点击的是弹框 就返回 不关闭 只有点的是其他地方的时候才关闭
      if (this.$refs.popover &&
        (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
      ) { return }
      if (this.$refs.contentWrapper &&
        (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))
      ) { return }
      this.close()
    },
    open(){
      this.visible = true
      this.$nextTick(() => {
        this.positioncontent()
        document.addEventListener('click', this.onClickDocument)
      })
    },
    close(){
      this.visible = false
      document.removeEventListener('click', this.onClickDocument)
    },
    onClick(event) {
      console.log(event.target)
      if(this.$refs.triggerWrapper.contains(event.target)){
        if(this.visible === true){
          this.close()
        }else{
          this.open()
        }
      }
      // 以下方法行不通
      //   setTimeout(() => {
      //     //  ()=>{} function x(){}.bind(this)
      //     // x()是一个函数 x().bind(this) 是一个新的函数
      //     document.addEventListener('click', function x(){
      //       this.visible = false
      //       document.removeEventListener('click', x)
      //       console.log('点击document关闭popover')
      //     }.bind(this))
      //   }, 1000)
      // }
    }
  },
  mounted () {
    console.log('hi')
    console.log(this.$refs)
  }
}
</script>
<style lang="scss" scoped>
  $border-color: #333;
  $border-radius: 4px;
  .popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper{
    background: #fff;
    position: absolute;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    padding: .5em 1em;
    max-width: 20em;
    word-break: break-all;
     &::before, &::after {
      content: '';
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
    }
    &.position-top {
      transform: translateY(-100%);
      margin-top: -10px;
      &::before, &::after {
        left: 10px;
      }
      &::before {
        border-top-color: black;
        border-bottom: none;
        top: 100%;
      }
      &::after {
        border-top-color: white;
        border-bottom: none;
        top: calc(100% - 1px);
      }
    }
    &.position-bottom {
      margin-top: 10px;
      &::before, &::after {
        left: 10px;
      }
      &::before {
        border-top: none;
        border-bottom-color: black;
        bottom: 100%;
      }
      &::after {
        border-top: none;
        border-bottom-color: white;
        bottom: calc(100% - 1px);
      }
    }
    &.position-left {
      transform: translateX(-100%);
      margin-left: -10px;
      &::before, &::after {
        transform: translateY(-50%);
        top: 50%;
      }
      &::before {
        border-left-color: black;
        border-right: none;
        left: 100%;
      }
      &::after {
        border-left-color: white;
        border-right: none;
        left: calc(100% - 1px);
      }
    }
    &.position-right {
      margin-left: 10px;
      &::before, &::after {
        transform: translateY(-50%);
        top: 50%;
      }
      &::before {
        border-right-color: black;
        border-left: none;
        right: 100%;
      }
      &::after {
        border-right-color: white;
        border-left: none;
        right: calc(100% - 1px);
      }
    }
  }

</style>


