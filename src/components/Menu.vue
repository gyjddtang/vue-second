<!--
  - Created by Mili on 2017/9/21
 -->

<template lang="html">
  <transition-group name="asideBarmenu" tag="ul" class="menuList">
    <li v-for="(item, index) of source" v-if="item.isShow" class="listItem" :key="'menuItem' + index">
      <el-tooltip effect="dark" :content="item.name" placement="right" :disabled="showMenu">
        <div :class="['menuBox', { active: activate === item.name }]" @click="menuClick(item)">
          <img class="icon com" :src="item.icon.com" alt="icon">
          <img class="icon active" :src="item.icon.active" alt="icon">
          <p class="word" v-show="showMenu">{{ item.name }}</p>
          <div :class="['arrow', { active: opened === item.name }]" v-show="item.isDropdown"></div>
        </div>
      </el-tooltip>
        <!--折叠菜单-->
      <transition name="subMenu">
        <ul class="subMenu" v-if="item.isDropdown && item.name === opened">
          <li v-for="(subItem, subIndex) of item.children" class="subListItem" :key="'subMenuItem' + subIndex">
            <el-tooltip effect="dark" :content="subItem.name" placement="right" :disabled="showMenu">
              <div :class="['menuBox', { active: activate === subItem.name }]" @click="menuClick(subItem)">
                <img class="icon com" :src="subItem.icon.com" alt="icon">
                <img class="icon active" :src="subItem.icon.active" alt="icon">
                <p class="word" v-show="showMenu">{{ subItem.name }}</p>
              </div>
            </el-tooltip>
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
      source: Array,
      showMenu: Boolean
    },
    data () {
      return {
        activate: void 0,
        opened: void 0
      }
    },
    watch: {
      $route () {
        this.findMenu()
      }
    },
    mounted () {
      this.findMenu()
    },
    methods: {
      findMenu () {
        let { name, matched } = this.$route
        let navLeave = matched.filter((item) => {
          return item.name
        })
        this.opened = navLeave[0].name
        this.activate = navLeave[navLeave.length - 1].props.default ? navLeave[navLeave.length - 1].props.default.name : name
      },

      menuClick (item) {
        if (item.isDropdown) {
          this.opened = this.opened === item.name ? '' : item.name
        } else {
          this.$router.push({ name: item.name })
        }
      }
    }
  }
</script>
