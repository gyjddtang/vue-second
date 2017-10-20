import Vue from 'vue'
import Router from 'vue-router'
import { _import, _require } from './load'

Vue.use(Router)

/**
 * 菜单导航资源
 * path：route
 * name: 菜单文本
 * icon: com-基本状态  active-激活状态
 * isShow: 是否在菜单导航中显示
 * isDropdown： 子集是否在菜单导航中显示
 */
export const asyncRouter = [
  {
    path: 'anchor',
    name: '主播管理',
    component: _import('Anchor'),
    icon: { com: _require('Anchor_nor.svg'), active: _require('Anchor_active.svg') },
    isShow: true,
    isDropdown: false,
    children: [
      {
        name: '专辑列表',
        path: 'list',
        icon: { com: _require('Anchor_nor.svg'), active: _require('Anchor_active.svg') },
        children: [
          {
            name: '节目列表',
            path: 'program',
            icon: { com: _require('Anchor_nor.svg'), active: _require('Anchor_active.svg') }
          }
        ]
      }
    ]
  }, {
    path: 'banner',
    name: 'Banner管理',
    component: _import('layout/Frame'),
    redirect: 'banner/banner1',
    icon: { com: _require('Banner_nor.svg'), active: _require('Banner_active.svg') },
    isShow: true,
    isDropdown: true,
    children: [
      {
        path: 'banner1',
        name: 'Banner管理1',
        component: _import('Banner1'),
        icon: { com: _require('complain_n.png'), active: _require('complain_p.png') }
      }, {
        path: 'banner2',
        name: 'Banner管理2',
        component: _import('Banner2'),
        icon: { com: _require('settlement_n.png'), active: _require('settlement_p.png') }
      }
    ]
  }, {
    path: 'voice',
    name: '语音抬头',
    component: _import('Voice'),
    icon: { com: _require('voice_n.png'), active: _require('voice_p.png') },
    isShow: true,
    isDropdown: false
  }, {
    path: '*',
    name: '404',
    component: _import('404'),
    isShow: false
  }
]

// 基本路由
export const constantRouter = [
  {
    path: '/',
    name: 'Login',
    component: _import('Login')
  }, {
    path: '/app',
    redirect: 'app/anchor',
    component: _import('layout/MainLayout'),
    children: asyncRouter
  }, {
    path: '*',
    name: 'Err404',
    component: _import('404'),
    isHidden: true
  }
]

export default new Router({
  routes: constantRouter
})
