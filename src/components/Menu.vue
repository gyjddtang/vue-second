<!--
  - Created by Mili on 2017/9/21
 -->

<template lang="html">
  <!--<transition-group name="menu" tag="ul" class="menuList" mode="in-out">-->
    <!--<li v-for="(item, index) of source" class="listItem" :key="'menuItem' + index" @click="menuClick($event, item)">-->
      <!--<div class="menuBox">-->
        <!--<img class="icon com" :src="item.icon.com" alt="icon">-->
        <!--<img class="icon active" :src="item.icon.active" alt="icon">-->
        <!--<p class="text">{{ item.text }}</p>-->
        <!--<div :class="['arrow', {active: opened === item.id}]" v-if="item.showChildren"></div>-->
      <!--</div>-->
      <!--<ul class="subMenu" v-if="item.showChildren && item.id === opened">-->
        <!--<li class="subListItem" v-for="(subItem, subIndex) of item.children" :key="'subMenuItem' + subIndex">-->
          <!--<div class="menuBox">-->
            <!--<img class="icon com" :src="subItem.icon.com" alt="icon">-->
            <!--<img class="icon active" :src="subItem.icon.active" alt="icon">-->
            <!--<p class="text">{{ subItem.text }}</p>-->
          <!--</div>-->
        <!--</li>-->
      <!--</ul>-->
    <!--</li>-->
  <!--</transition-group>-->
  <ul class="menuList">
    <li v-for="(item, index) of source" class="listItem" :key="'menuItem' + index" @click="menuClick($event, item)">
      <div class="menuBox">
        <img class="icon com" :src="item.icon.com" alt="icon">
        <img class="icon active" :src="item.icon.active" alt="icon">
        <p class="text">{{ item.text }}</p>
        <div :class="['arrow', {active: opened === item.id}]" v-if="item.showChildren"></div>
      </div>
      <ul class="subMenu" v-show="item.showChildren && item.id === opened">
        <li class="subListItem" v-for="(subItem, subIndex) of item.children" :key="'subMenuItem' + subIndex">
          <div class="menuBox">
            <img class="icon com" :src="subItem.icon.com" alt="icon">
            <img class="icon active" :src="subItem.icon.active" alt="icon">
            <p class="text">{{ subItem.text }}</p>
          </div>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'menu',
    props: {
      source: Array
    },
    data () {
      return {
        opened: 4,
        listItemStyle: {

        }
      }
    },
    watch: {
      source: function (val) {
        console.log(val)
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
