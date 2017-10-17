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
    <AsideBarMenu :source="menuData" />
  </div>
</template>

<script>
  import AsideBarMenu from '../../components/Menu'
  let data = [
    {
      id: 1,
      text: '主播管理',
      pathName: '/app/anchor/list',
      icon: {com: require('../../assets/menuIcon/Anchor_nor.svg'), active: require('../../assets/menuIcon/Anchor_active.svg')},
      showChildren: false,
      children: [
        {
          id: 11,
          text: '专辑列表',
          pathName: '/app/anchor/album/list',
          icon: {com: require('../../assets/menuIcon/Anchor_nor.svg'), active: require('../../assets/menuIcon/Anchor_active.svg')},
          children: [
            {
              id: 12,
              text: '节目列表',
              pathName: '/app/anchor/album/program',
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
      pathName: '',
      icon: {com: require('../../assets/menuIcon/settlement_n.png'), active: require('../../assets/menuIcon/settlement_p.png')},
      showChildren: true,
      children: [
        {
          id: 31,
          text: '结算管理1',
          pathName: '/app/studentstatistics',
          icon: {com: require('../../assets/menuIcon/complain_n.png'), active: require('../../assets/menuIcon/complain_p.png')},
          children: []
        }, {
          id: 32,
          text: '结算管理2',
          pathName: '/app/schoolstatistics',
          icon: {com: require('../../assets/menuIcon/settlement_n.png'), active: require('../../assets/menuIcon/settlement_p.png')},
          children: []
        }, {
          id: 33,
          text: '结算管理3',
          pathName: '/app/schoolstatistics',
          icon: {com: require('../../assets/menuIcon/Banner_nor.svg'), active: require('../../assets/menuIcon/Banner_active.svg')},
          children: []
        }
      ]
    },
    {
      id: 3,
      text: '投诉管理',
      pathName: '/app/complaint',
      icon: {com: require('../../assets/menuIcon/complain_n.png'), active: require('../../assets/menuIcon/complain_p.png')},
      showChildren: false,
      children: []
    },
    {
      id: 4,
      text: 'Banner管理',
      pathName: '/app/banner',
      icon: {com: require('../../assets/menuIcon/Banner_nor.svg'), active: require('../../assets/menuIcon/Banner_active.svg')},
      showChildren: true,
      children: [
        {
          id: 41,
          text: 'Banner管理1',
          pathName: '/app/banner1',
          icon: {com: require('../../assets/menuIcon/complain_n.png'), active: require('../../assets/menuIcon/complain_p.png')},
          children: []
        }, {
          id: 42,
          text: 'Banner管理2',
          pathName: '/app/banner2',
          icon: {com: require('../../assets/menuIcon/settlement_n.png'), active: require('../../assets/menuIcon/settlement_p.png')},
          children: []
        }
      ]
    },
    {
      id: 5,
      text: '语音抬头',
      icon: {com: require('../../assets/menuIcon/voice_n.png'), active: require('../../assets/menuIcon/voice_p.png')},
      pathName: '/app/voice',
      showChildren: false,
      children: []
    }
  ]

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
      this.menuData = data
    }
  }
</script>
