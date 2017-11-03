<!--
  - Created by Mili on 2017/10/31
 -->
<template lang="html">
  <div class="tableBar">
    <div class="filterBar" v-if="showFilterBar">
      <slot name="filter">
        <el-input :placeholder='placeholder' v-model="filter.search" class="searchDefault">
          <el-button slot="append" icon="el-icon-search" @click="searchFilter"></el-button>
        </el-input>
      </slot>
    </div>
    <slot name="table"></slot>
    <div class="paginationBar" v-if="showPagination">
      <el-pagination
        @size-change="pageSizeChange"
        @current-change="pageCurrentChange"
        :current-page="listQuery.current"
        :page-sizes="listQuery.sizes"
        :page-size="listQuery.size"
        :total="listQuery.total"
        layout="total, sizes, prev, pager, next">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tableBar',
    props: {
      listQuery: {
        type: Object,
        default: function () {
          return {
            current: 1,
            size: 10,
            sizes: [10, 20, 30, 50],
            total: 0,
            search: ''
          }
        }
      },   // 数据源 { current, size, sizes, total, search, }
      showPagination: {   // 是否显示分页器
        type: Boolean,
        default: true
      },
      showFilterBar: {   // 是否显示查询栏
        type: Boolean,
        default: true
      },
      placeholder: {
        type: String,
        default: '请输入内容搜索'
      }
    },
    data () {
      return {
        filter: {
          search: ''
        }
      }
    },
    methods: {
      searchFilter () {
        if (this.listQuery.current === 1) {
          this.$emit('update:listQuery', { ...this.listQuery, search: this.filter.search })
          this.$emit('getData')
        } else {
          this.$emit('update:listQuery', { ...this.listQuery, search: this.filter.search, current: 1 })
        }
      },

      pageSizeChange (val) {
        this.$emit('update:listQuery', { ...this.listQuery, size: val })
        this.$emit('getData')
      },

      pageCurrentChange (val) {
        this.$emit('update:listQuery', { ...this.listQuery, current: val })
        this.$emit('getData')
      }
    }
  }
</script>
