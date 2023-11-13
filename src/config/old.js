// get the client
require('dotenv').config();
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port:process.env.DB_PORT, //default 3306
    user: process.env.DB_USER, //default : emty
    password:process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

module.exports = connection;