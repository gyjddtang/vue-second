/**
 * Created by Mili on 2017/11/10.
 */

var express = require('express')
var data = require('../../mock/user')

var user = express.Router()

user.post('/doLogin', (req, res, next) => {
  console.log(req.body)
  res.send({
    succeed: true,
    msg: '登录成功',
    data: data
  })
})

module.exports = user
