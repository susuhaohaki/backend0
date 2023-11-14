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
app.use('/',webRoutes)

//TEST CONNECTION


// simple query
// connection.query(
//   'SELECT * from USERS',
//   function(err, results, fields) {
//     console.log('>>>>>RESULTS =',results); // results contains rows returned by server
//   }
// );

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})