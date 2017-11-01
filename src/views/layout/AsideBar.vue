<!--
  - Created by Mili on 2017/9/20
 -->

<template lang="html">
  <div class="asideBar">
    <div class="logoBox">
      <img class="logo" src="../../assets/Mili.svg" alt="logo">
      <transition name="asideSystemName">
        <h4 class="title" v-show="showMenu">Mili管理系统</h4>
      </transition>
    </div>
    <div class="toggleMenu">
      <div class="lineBox" @click="toggleMenu"></div>
    </div>
    <AsideBarMenu :source="menuData" :showMenu="showMenu"/>
  </div>
</template>

<script>
  import AsideBarMenu from '../../components/Menu'
  import { asyncRouter } from '../../router/index'

  export default {
    name: 'asideBar',
    components: {
      AsideBarMenu
    },
    props: {
      showMenu: Boolean
    },
    data () {
      return {
        menuData: []
      }
    },
    mounted () {
      this.menuData = asyncRouter
    },
    methods: {
      toggleMenu () {
        this.$emit('update:showMenu', !this.showMenu)
      }
    }
  }
</script>
