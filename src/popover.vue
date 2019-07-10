<template>
  <div class="popover" @click.stop="xxx">
    <!-- @click.stop 阻止冒泡 -->
    <div ref="content-wrapper" class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'WheelPopover',
  data() {
    return {visible: false}
  },
  methods: {
    xxx() {
      this.visible = !this.visible
      if(this.visible === true){
        this.$nextTick(() => {
          document.body.appendChild(this.$refs.contentWrapper)
          let eventHandler = () => {
            this.visible = false
            document.removeEventListener('click', eventHandler)
          }
          document.addEventListener('click', eventHandler)
        })
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
    console.log(this.$refs)
    setTimeout(() => {
      console.log(this.$refs.contentWrapper)
      console.log('添加一个')
      // document.body.appendChild(this.$refs.contentWrapper)
    }, 1000)
  }
}
</script>
<style lang="scss" scoped>
  .popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
    .content-wrapper{
      position: absolute;
      bottom: 100%;
      left: 0;
      border: 1px solid red;
      box-shadow: 0 0 3px rgba(0,0,0,0.5);
    }
  }

</style>


