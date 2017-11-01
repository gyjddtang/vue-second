<!--
  - Created by Mili on 2017/9/20
 -->

<template lang='html'>
  <el-row :class="['mainLayout', { hideMenu: !showMenu }]">
    <el-col :span="showMenu ? 4 : 1">
      <AsideBar :showMenu.sync="showMenu" />
    </el-col>
    <el-col :span="showMenu ? 20 : 23" class='rightContainer'>
      <HeaderBar />
      <main>
        <BreadBar />
        <transition name="routerView" mode="out-in">
          <router-view></router-view>
        </transition>
      </main>
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
        showMenu: true
      }
    },
    mounted () {
      this.testColor = randomColor()
    }
  }
</script>
