<!--
  - Created by Mili on 2017/9/21
 -->

<template lang="html">
  <transition-group name="asideBarmenu" tag="ul" class="menuList">
    <li v-for="(item, index) of source" class="listItem" :key="'menuItem' + index" @click="menuClick($event, item)">
      <div :class="['menuBox', { active: item.path === defaultActive }]">
        <img class="icon com" :src="item.icon.com" alt="icon">
        <img class="icon active" :src="item.icon.active" alt="icon">
        <p class="word">{{ item.text }}</p>
        <div :class="['arrow', { active: opened === item.id }]" v-if="item.showChildren"></div>
      </div>
      <transition name="subMenu">
        <ul class="subMenu" v-show="item.showChildren && item.id === opened">
          <li v-for="(subItem, subIndex) of item.children" class="subListItem" :key="'subMenuItem' + subIndex">
            <div :class="['menuBox', { active: subItem.path === defaultActive }]">
              <img class="icon com" :src="subItem.icon.com" alt="icon">
              <img class="icon active" :src="subItem.icon.active" alt="icon">
              <p class="word">{{ subItem.text }}</p>
            </div>
          </li>
        </ul>
      </transition>
    </li>
  </transition-group>
</template>

<script>
  export default {
    name: 'menu',
    props: {
      source: Array,   // menu数据源
      defaultActive: String   // 默认选中项
    },
    data () {
      return {
        opened: 0,
        listItemStyle: {

        }
      }
    },
    watch: {
      source: function (val) {
      }
    },
    mounted () {
    },
    methods: {
      menuClick (e, item) {
        if (this.opened === item.id) {
          this.opened = -1
        } else {
          this.opened = item.id
        }
      }
    }
  }
</script>
