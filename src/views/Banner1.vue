<!--
  - Created by Mili on 2017/11/2
 -->

<template lang="html">
  <section class="bannerContainer">
    <TableBar :listQuery.sync="listQuery" @getData="getData" :showFilterBar="false">
      <el-table
        :data="listData"
        :row-key="rowKey"
        slot="table"
      >
        <el-table-column prop="name" label="标题"></el-table-column>
      </el-table>
    </TableBar>
  </section>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import TableBar from '../components/Table'

  export default {
    name: 'banner1',
    components: {
      TableBar
    },
    data () {
      return {
        listQuery: {
          current: 1,
          size: 10
        }
      }
    },

    computed: {
      ...mapState('banner1', [
        'listData',
        'dataTotal'
      ])
    },

    watch: {
      dataTotal (val) {
        this.listQuery.total = val
      }
    },

    mounted () {
      this.getData()
    },

    methods: {
      ...mapActions('banner1', [
        'getList'
      ]),

      getData (page) {
        if (page) this.listQuery.current = page
        let data = new FormData()
        data.append('pageNo', this.listQuery.current)
        data.append('pageSize', this.listQuery.size)
        data.append('code', 1)

        this.getList(data)
      },

      rowKey (row) {
        return row.id
      }
    }
  }
</script>
