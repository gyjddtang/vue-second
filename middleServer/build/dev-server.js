/**
 * Created by Mili on 2017/11/10.
 */

let express = require('express')
let route = require('../routes/index')

let app = express()

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} -> ${Date()}`)
  next()
})

app.use('/mockapi/wisdomradio/pc/manage', route)

console.log('> Listening at http://localhost:3000')

app.listen(3000)
