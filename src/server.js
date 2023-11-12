require('dotenv').config();
const express = require('express'); //commonjs
const app = express();//app express
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')

const port = process.env.PORT || 8888 //port --> hardcode
const hostname = process.env.HOST_NAME
const path = require ('path')

//config template enj
configViewEngine(app);

// khai báo route
app.use('/',webRoutes)

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})