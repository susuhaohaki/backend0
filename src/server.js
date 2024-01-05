require('dotenv').config();
const express = require('express'); //commonjs
const app = express();//app express
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database')


const port = process.env.PORT || 8888 //port --> hardcode
const hostname = process.env.HOST_NAME
const path = require ('path')

//config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

//config template enj
configViewEngine(app);

// khai báo route
app.use('/',webRoutes);

//TEST CONNECTION
  (async()=>{
    try {
      await connection();
      app.listen(port, hostname, () => {
        console.log(`backen zero app listening on port ${port}`)
      })
    }catch (error){
      console.log ('error connect to DB: ', error)
    } 
  })()



