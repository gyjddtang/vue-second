/**
 * Created by Mili on 2017/11/13.
 */

var Mock = require('mockjs')

var Random = Mock.Random
Random.cname()

var data = Mock.mock({
  userName: '@cname'
})

module.exports = data

