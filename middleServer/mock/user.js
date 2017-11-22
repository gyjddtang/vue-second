/**
 * Created by Mili on 2017/11/13.
 */

var Mock = require('mockjs')

var Random = Mock.Random
Random.cname()
Random.city(true)

var data = Mock.mock({
  userName: '@cname',
  date: new Date(),
  address: '@city'
})

module.exports = data

