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
    computed: {
      ...mapState('app', [
        'visitedViews'
      ]),

      currentTag () {
        return this.$route.name
      }
    },
    watch: {
      $route (val) {
        this.addVisited(val.name)
      }
    },
    mounted () {
      this.addVisited(this.$route.name)
    },
    methods: {
      ...mapActions('app', [
        'addVisited',
        'delVisited'
      ]),
      tagClose (item) {
        this.delVisited(item)
        if (item === this.$route.name) {
          this.$router.push({ name: this.visitedViews[this.visitedViews.length - 1] })
        }
      }
    }
  }
</script>
