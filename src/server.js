require('dotenv').config();
const express = require('express'); //commonjs
const app = express();//app express
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
// get the client
const mysql = require('mysql2');

const port = process.env.PORT || 8888 //port --> hardcode
const hostname = process.env.HOST_NAME
const path = require ('path')

//config template enj
configViewEngine(app);

// khai báo route
app.use('/',webRoutes)

//TEST CONNECTION
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  port:3307, //default 3306
  user: 'root', //default : emty
  password:'123456',
  database: 'hoidanit'
});

// simple query
connection.query(
  'SELECT * from USERS',
  function(err, results, fields) {
    console.log('>>>>>RESULTS =',results); // results contains rows returned by server
    console.log('>>>>> FIELD = ',fields); // fields contains extra meta data about results, if available
  }
);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})