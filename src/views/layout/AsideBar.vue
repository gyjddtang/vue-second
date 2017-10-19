<!--
  - Created by Mili on 2017/9/20
 -->

<template lang="html">
  <div class="sideBar">
    <div class="logoBox">
      <img class="logo" src="../../assets/Mili.svg" alt="logo">
      <h4 class="title">Mili管理系统</h4>
    </div>
    <div class="toggleMenu">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <AsideBarMenu :source="menuData"/>
  </div>
</template>

<script>
  import AsideBarMenu from '../../components/Menu'
  import { asyncRouter } from '../../router/index'
  /** let data = [
    {
      id: 1,
      text: '主播管理',
      path: '/app/anchor',
      icon: {com: require('../../assets/menuIcon/Anchor_nor.svg'), active: require('../../assets/menuIcon/Anchor_active.svg')},
      isDropdown: false,
      children: [
        {
          id: 11,
          text: '专辑列表',
          path: '/app/anchor/album/list',
          icon: {com: require('../../assets/menuIcon/Anchor_nor.svg'), active: require('../../assets/menuIcon/Anchor_active.svg')},
          children: [
            {
              id: 12,
              text: '节目列表',
              path: '/app/anchor/album/program',
              icon: {com: require('../../assets/menuIcon/Anchor_nor.svg'), active: require('../../assets/menuIcon/Anchor_active.svg')},
              children: []
            }
          ]
        }
      ]
    },
    {
      id: 2,
      text: '结算管理',
      path: '',
      icon: {com: require('../../assets/menuIcon/settlement_n.png'), active: require('../../assets/menuIcon/settlement_p.png')},
      isDropdown: true,
      children: [
        {
          id: 31,
          text: '结算管理1',
          path: '/app/studentstatistics',
          icon: {com: require('../../assets/menuIcon/complain_n.png'), active: require('../../assets/menuIcon/complain_p.png')},
          children: []
        }, {
          id: 32,
          text: '结算管理2',
          path: '/app/schoolstatistics',
          icon: {com: require('../../assets/menuIcon/settlement_n.png'), active: require('../../assets/menuIcon/settlement_p.png')},
          children: []
        }, {
          id: 33,
          text: '结算管理3',
          path: '/app/schoolstatistics',
          icon: {com: require('../../assets/menuIcon/Banner_nor.svg'), active: require('../../assets/menuIcon/Banner_active.svg')},
          children: []
        }
      ]
    },
    {
      id: 3,
      text: '投诉管理',
      path: '/app/complaint',
      icon: {com: require('../../assets/menuIcon/complain_n.png'), active: require('../../assets/menuIcon/complain_p.png')},
      isDropdown: false,
      children: []
    },
    {
      id: 4,
      text: 'Banner管理',
      path: '',
      icon: {com: require('../../assets/menuIcon/Banner_nor.svg'), active: require('../../assets/menuIcon/Banner_active.svg')},
      isDropdown: true,
      children: [
        {
          id: 41,
          text: 'Banner管理1',
          path: '/app/banner1',
          icon: {com: require('../../assets/menuIcon/complain_n.png'), active: require('../../assets/menuIcon/complain_p.png')},
          children: []
        }, {
          id: 42,
          text: 'Banner管理2',
          path: '/app/banner2',
          icon: {com: require('../../assets/menuIcon/settlement_n.png'), active: require('../../assets/menuIcon/settlement_p.png')},
          children: []
        }
      ]
    },
    {
      id: 5,
      text: '语音抬头',
      icon: {com: require('../../assets/menuIcon/voice_n.png'), active: require('../../assets/menuIcon/voice_p.png')},
      path: '/app/voice',
      isDropdown: false,
      children: []
    }
  ] **/

  export default {
    name: 'asideBar',
    components: {
      AsideBarMenu
    },
    data () {
      return {
        menuData: []
      }
    },
    mounted () {
      this.menuData = asyncRouter
    }
  }
</script>
