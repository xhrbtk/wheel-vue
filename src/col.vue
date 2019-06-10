<template>
 <div class="col"
  :class="colClass"
  :style="colStyle"
  >
  <slot></slot>
 </div>
</template>
<script>
let validator = (value) => {
  // 如果
  let keys = Object.keys(value)
  let valid = true
  keys.forEach(key => {
    if(!['span', 'offset'].includes(key)){
      valid = false
    }
  })
  return valid
}
export default {
  name: 'WheelCol',
  props: {
    span: [Number, String],
    offset: [Number, String],
    phone: {
      type: Object,
      validator
    },
    ipad: {
      type: Object,
      validator
    },
    narrowPc: {
      type: Object,
      validator
    },
    pc: {
      type: Object,
      validator
    },
    widePc: {
      type: Object,
      validator
    },
  },
  data(){
    return {
      gutter: 0,
    }
  },
  computed: {
    colClass(){
      let {span, offset, ipad, narrowPc, pc, widePc} = this
      // let phoneClass = []
      // if(phone){
      //   phoneClass = [`col-phone-${phone.span}`]
      // }
       return [
         span && `col-${span}`,
         offset && `offset-${offset}`,
        //  ...phoneClass
        // ... (phone ? [`col-phone-${phone.span}`] : []),
        ... (ipad ? [`col-ipad-${ipad.span}`] : []),
        ... (narrowPc ? [`col-narrow-pc-${narrowPc.span}`] : []),
        ... (pc ? [`col-pc-${pc.span}`] : []),
        ... (widePc ? [`col-wide-pc-${widePc.span}`] : [])
         ]
    },
    colStyle(){
      return {
        paddingLeft: this.gutter/2 + 'px',
        paddingRight: this.gutter/2 + 'px'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .col{
    height: 100px;
    width: 50%;
    background-color: #41e4c7;
    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n}{
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n}{
        margin-left: ($n / 24) * 100%;
      }
    }
    // // // 手机
    // @media (max-width: 576px){
    //   $class-prefix: col-phone-;
    //   @for $n from 1 through 24 {
    //     &.#{$class-prefix}#{$n}{
    //       width: ($n / 24) * 100%;
    //     }
    //   }
    //   $class-prefix: offset-phone-;
    //   @for $n from 1 through 24 {
    //     &.#{$class-prefix}#{$n}{
    //       margin-left: ($n / 24) * 100%;
    //     }
    //   }
    // }

    // ipad
    @media (min-width: 577px) and (max-width: 768px){
      $class-prefix: col-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n}{
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n}{
          margin-left: ($n / 24) * 100%;
        }
      }
    }

    // pc
    @media (min-width: 769px) and (max-width: 922px){
      $class-prefix: col-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n}{
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n}{
          margin-left: ($n / 24) * 100%;
        }
      }
    }


    // 窄屏
    @media (min-width: 993x) and (max-width: 1200px){
      $class-prefix: col-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n}{
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n}{
          margin-left: ($n / 24) * 100%;
        }
      }
    }

    // 宽屏
    @media (min-width: 1201x) {
      $class-prefix: col-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n}{
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n}{
          margin-left: ($n / 24) * 100%;
        }
      }
    }


  }
</style>


