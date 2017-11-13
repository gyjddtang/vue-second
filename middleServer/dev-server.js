/**
 * Created by Mili on 2017/11/10.
 */

var express = require('express')
var bodyParser = require('body-parser')
// var multer = require('multer')
var route = require('./routes/index')

var app = express()

// app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// app.use(multer()) // for parsing multipart/form-data

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} -> ${Date()}`)
  next()
})

app.use('/wisdomradio/pc/manage', route)

console.log('> Listening at http://localhost:3000')

app.listen(3000)
