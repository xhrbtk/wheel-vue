<template>
  <div class="popover" @click="onClick" ref="popover">
    <!-- @click.stop 阻止冒泡 -->
    <div ref="contentWrapper" class="content-wrapper" v-if="visible" >
      <slot name="content"></slot>
    </div>
    <!-- slot不支持ref -->
    <span ref="triggerWrapper"><slot ></slot></span>
  </div>
</template>
<script>
export default {
  name: 'WheelPopover',
  data() {
    return {visible: false}
  },
  methods: {
    positioncontent(){
      document.body.appendChild(this.$refs.contentWrapper)
      let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
      this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
      this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
    },
    onClickDocument(e){
      if(this.$refs.popover &&
      (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))){return}
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
  .popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper{
    position: absolute;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    transform: translateY(-100%);
  }

</style>


