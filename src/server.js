require('dotenv').config();
const express = require('express'); //commonjs
const app = express();//app express
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const apiRoutes = require('./routes/api')
const fileUpload = require('express-fileupload');
const { MongoClient } = require('mongodb');


const connection = require('./config/database')


const port = process.env.PORT || 8888 //port --> hardcode
const hostname = process.env.HOST_NAME
const path = require ('path')

//config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

//config template enj
configViewEngine(app);

// config file upload
app.use(fileUpload());


// khai báo route
app.use('/',webRoutes);
app.use('/v1/api',apiRoutes);


//TEST CONNECTION
  (async()=>{
    try {
      //using mongoose
      // await connection();

      //using mongodb driver
      const url = process.env.DB_HOST_WITH_DRIVER;
      const client = new MongoClient(url);
      // Database Name
      const dbName = process.env.DB_NAME;
      
      // Use connect method to connect to the server
      await client.connect();
      console.log('Connected successfully to server');
      
      const db = client.db(dbName);
      const collection = db.collection('documents');
      // the following code examples can be pasted here...
      
      //
      app.listen(port, hostname, () => {
        console.log(`backen zero app listening on port ${port}`)
      })
    }catch (error){
      console.log ('error connect to DB: ', error)
    } 
  })()



