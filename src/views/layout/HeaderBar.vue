<!--
  - Created by Mili on 2017/10/30
 -->

<template lang="html">
  <header>
    <div class="tags">
      <router-link
        v-for="(item, index) of visitedViews"
        :to="{ name: item }"
        :key="index"
        class="routerLink"
      >
        <el-tag
          size="medium"
          :closable="visitedViews.length > 1"
          @close.prevent="tagClose(item)"
          :type="item === currentTag ? '' : 'info'"
        >
          {{ item }}
        </el-tag>
      </router-link>
    </div>
    <img class="icon" src="../../assets/User.svg" alt="user">
    <span class="user">admin</span>
    <img class="icon" src="../../assets/logout.svg" alt="user">
  </header>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  export default {
    name: 'headerBar',
    data () {
      return {
        currentTag: void 0
      }
    },
    computed: {
      ...mapState('app', [
        'visitedViews'
      ])
    },
    watch: {
      $route (val) {
        this.setVisited()
      }
    },
    mounted () {
      this.setVisited()
    },
    methods: {
      ...mapActions('app', [
        'addVisited',
        'delVisited'
      ]),

      setVisited () {
        let { matched, name } = this.$route
        let routeLeave = matched.filter((item) => {
          return item.name
        })
        name = !name ? routeLeave[routeLeave.length - 1].name : name
        this.currentTag = name
        this.addVisited(name)
      },

      tagClose (item) {
        this.delVisited(item)
        let { matched, name } = this.$route
        let routeLeave = matched.filter((item) => {
          return item.name
        })
        name = !name ? routeLeave[routeLeave.length - 1].name : name
        if (item === name) {
          this.$router.push({ name: this.visitedViews[this.visitedViews.length - 1] })
        }
      }
    }
  }
</script>
