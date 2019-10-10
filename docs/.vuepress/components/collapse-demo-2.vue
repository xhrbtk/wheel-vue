<template>
  <div style="padding-top: 16px;">
    <h2>多选</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-collapse :selected.sync="selected" >
      <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
      <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
      <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
    </g-collapse>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import GCollapse from '../../../src/collapse'
  import GCollapseItem from '../../../src/collapse-item'
  export default {
    components: {GCollapse, GCollapseItem},
    data () {
      return {
        selected: ['2'],
        content: `
          data:{
            selected: '1'
          }
          <g-tabs :selected="selected">
            <g-tabs-head>
              <g-tabs-item name="1">1</g-tabs-item>
              <g-tabs-item name="2">2</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
              <g-tabs-pane name="1">content 1</g-tabs-pane>
              <g-tabs-pane name="2">content 2</g-tabs-pane>
            </g-tabs-body>
          </g-tabs>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>