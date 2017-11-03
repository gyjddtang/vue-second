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
        <el-table-column prop="name" label="使用人">
          <template slot-scope="{ row }">
            <router-link :to="{ name: '专辑列表' }">{{ row.name }}</router-link>
          </template>
        </el-table-column>
        <el-table-column prop="abumNum" label="专辑数" width="100px">
          <template slot-scope="{ row }">
            <span>{{ nullFormat(row.abumNum) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="programNum" label="节目数" width="100px">
          <template slot-scope="{ row }">
            <span>{{ nullFormat(row.programNum) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="income" label="累计收益">
          <template slot-scope="{ row }">
            <span>{{ moneyFormat(row.income) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="programPushNum" label="节目推送总量" sortable>
          <template slot-scope="{ row }">
            <span>{{ nullFormat(row.programPushNum) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="complaintedTime" label="被投诉次数">
          <template slot-scope="{ row }">
            <span>{{ nullFormat(row.complaintedTime) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </TableBar>
  </section>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import TableBar from '../components/Table'
  import { moneyFormat, nullFormat, rowKey } from '../units/common'

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
      moneyFormat,
      nullFormat,
      rowKey,

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
