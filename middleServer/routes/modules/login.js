/**
 * Created by Mili on 2017/11/10.
 */

let express = require('express')

let login = express.Router()

login.post('/doLogin', (req, res, next) => {
  res.send('调试成功')
})

module.exports = login
