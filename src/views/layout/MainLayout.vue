<!--
  - Created by Mili on 2017/9/20
 -->

<template lang='html'>
  <!--<div class='mainLayout'>-->
    <!--<AsideBar />-->
    <!--<div class='rightContainer'>-->
      <!--<HeaderBar />-->
      <!--<section class="content">-->
        <!--<BreadBar />-->
        <!--<router-view></router-view>-->
      <!--</section>-->
    <!--</div>-->
  <!--</div>-->
  <el-row class="mainLayout">
    <el-col :span="4">
      <AsideBar />
    </el-col>
    <el-col :span="20">
      <div class='rightContainer'>
        <HeaderBar />
        <section class="content">
          <BreadBar />
          <router-view></router-view>
        </section>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import AsideBar from './AsideBar'
  import HeaderBar from './HeaderBar'
  import BreadBar from './BreadBar'
  import { randomColor } from '../../units/common'

  export default {
    name: 'mainLayout',
    components: {
      AsideBar,
      HeaderBar,
      BreadBar
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
