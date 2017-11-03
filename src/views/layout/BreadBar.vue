<!--
  - Created by Mili on 2017/10/30
 -->

<template lang="html">
  <div class="breadBar">
    <el-breadcrumb v-if="breadData.length != 0">
      <el-breadcrumb-item
        v-for="(item, index) of breadData"
        :key="'breadCrumb' + index"
        :to="{ name: item.name }"
      >
        {{ item.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: 'breadBar',
    data () {
      return {
        breadData: []
      }
    },
    watch: {
      $route (val) {
        this.setBreadCrumb()
      }
    },
    mounted () {
      this.setBreadCrumb()
    },
    methods: {
      setBreadCrumb () {
        let { matched } = this.$route
        // 过滤掉没有name的路由，如 /app
        this.breadData = matched.filter(item => {
          return item.name
        })
      }
    }
  }
</script>
