<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
//不要儿子搞一下爸爸 爸爸搞一下儿子 只在一个地方更改数据
  import Vue from 'vue'
  export default {
    name: "WheelCollapse",
    props: {
      single: {
        type: Boolean,
        default: false
      },
      selected: {
        type: Array,
      }
    },
    data () {
      return {
        eventBus: new Vue(),
      }
    },
    provide () {
      return {
        eventBus: this.eventBus
      }
    },
    mounted () {
      this.eventBus.$emit('update:selected', this.selected)  //一开始的状态 事件中心通知儿子们改选中的选中

      //接受儿子们反应出来的用户意图  如果用户打算添加选中
      this.eventBus.$on('update:addSelected', (name) => {
        let selectedCopy = JSON.parse(JSON.stringify(this.selected)) //拷贝selected 之所以拷贝是因为vue不支持修改props
        if (this.single) {
          selectedCopy = [name]
        } else {
          selectedCopy.push(name)
        }
        //得到最小的被选中的item之后通知儿子们进行状态修改
        this.eventBus.$emit('update:selected', selectedCopy)
        this.$emit('update:selected', selectedCopy) //通知外界选中的数据发生了变化
      })


      //通知儿子们该移除的移除
      this.eventBus.$on('update:removeSelected', (name) => {
        let selectedCopy = JSON.parse(JSON.stringify(this.selected))
        let index = selectedCopy.indexOf(name)
        selectedCopy.splice(index, 1)
        this.eventBus.$emit('update:selected', selectedCopy)
        this.$emit('update:selected', selectedCopy) //通知外界选中的数据发生了变化
      })
    }
  }
</script>

<style scoped lang="scss">
  $grey: #ddd;
  $border-radius: 4px;
  .collapse {
    border: 1px solid $grey;
    border-radius: $border-radius;
  }
</style>