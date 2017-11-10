/**
 * Created by Mili on 2017/11/10.
 */

let express = require('express')
let login = require('./modules/login')

let route = express()

route.use('/login', login)

module.exports = route
