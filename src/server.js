// import express from 'express', //es modules
const express = require('express') //commonjs
const app = express()//app express
require('dotenv').config()

const port = process.env.PORT || 8888 //port --> hardcode
const hostname = process.env.HOST_NAME
const path = require ('path')


//config template enj
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'enj')

//config static files
app.use(express.static(path.join(__dirname, 'public')))
// khai báo route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/abc', (req, res) => {
    // res.send('Hello World!')
    res.render('sample.ejs')
  })

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})