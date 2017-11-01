<!--
  - Created by Mili on 2017/10/17
 -->

<template lang="html">
  <section class="anchor">
    <TableBar
      :listQuery.sync="listQuery"
      @getData="getData"
    >
      <!--<el-date-picker-->
        <!--slot="filter"-->
        <!--v-model="date.datePicker"-->
        <!--type="daterange"-->
        <!--:editable="false"-->
        <!--@change="dateChange"-->
        <!--value-format="yyyy-MM-dd">-->
      <!--</el-date-picker>-->
      <el-table
        :data="dataList"
        :row-key="rowKey"
        slot="table"
      >
        <el-table-column prop="abumNum" label="专辑数" width="100px">
          <template slot-scope="scope">
            <span>{{ scope.row.abumNum ? scope.row.abumNum : '0' }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="programNum" label="节目数" width="100px">
          <template slot-scope="scope">
            <span>{{ scope.row.programNum ? scope.row.programNum : '0' }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="programPushNum" label="节目推送总量" sortable>
          <template slot-scope="scope">
            <span>{{ scope.row.programPushNum ? scope.row.programPushNum : '0' }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="complaintedTime" label="被投诉次数">
          <template slot-scope="scope">
            <span>{{ scope.row.complaintedTime ? scope.row.complaintedTime : '0' }}</span>
          </template>
        </el-table-column>
      </el-table>
    </TableBar>
  </section>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import TableBar from '../components/Table'

  export default {
    name: 'anchor',
    components: {
      TableBar
    },
    data () {
      return {
        listQuery: {
          current: 1,
          size: 10,
          search: ''
        },
        date: {
          datePicker: '',
          startTime: '',
          endTime: ''
        }
      }
    },
    computed: {
      ...mapState('anchor', [
        'dataList',
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
      ...mapActions('anchor', [
        'getList'
      ]),

      rowKey (row) {
        return row.id
      },

      dateChange (val) {
        if (val) {
          this.date.startTime = val[0]
          this.date.endTime = val[1]
        }
        if (this.listQuery.current === 1) {
          this.getData()
        } else {
          this.listQuery.current = 1
        }
      },

      getData (page) {
        if (page) this.listQuery.current = page
        let data = new FormData()
        data.append('pageNo', this.listQuery.current)
        data.append('pageSize', this.listQuery.size)
        data.append('nameOrPhone', this.listQuery.search)
        if (this.date.datePicker) {
          data.append('startTime', this.date.startTime)
          data.append('endTime', this.date.endTime)
        }
        this.getList(data)
      }
    }
  }
</script>
