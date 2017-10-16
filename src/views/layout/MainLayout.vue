<!--
  - Created by Mili on 2017/9/20
 -->

<template lang='html'>
  <div class='mainLayout'>
    <AsideBar />
    <section class='rightContainer'>
      <p>我是右边的内容</p>
    </section>
  </div>
</template>

<script>
  import AsideBar from './AsideBar'
  import { randomColor } from '../../units/common'

  export default {
    name: 'mainLayout',
    components: {
      AsideBar
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
