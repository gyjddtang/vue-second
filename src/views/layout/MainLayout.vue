<!--
  - Created by Mili on 2017/9/20
 -->

<template lang='html'>
  <div class='mainLayout'>
    <SideBar />
    <div class='rightContainer'>
      <p>我是右边的内容</p>
      <div class='test' ref="div1" :style='{background: testColor}'></div>
    </div>
  </div>
</template>

<script>
  import SideBar from './SideBar'
  import { randomColor } from '../../units/common'

  export default {
    name: 'mainLayout',
    components: {
      SideBar
    },
    data () {
      return {
        testColor: void 0
      }
    },
    mounted () {
      this.testColor = randomColor()
    }
  }
</script>
