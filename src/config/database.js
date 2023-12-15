// get the client
require('dotenv').config();
const mongoose = require('mongoose');
const dbState = [{
  value: 0,
  label: "Disconnected"
},
{
  value: 1,
  label: "Connected"
},
{
  value: 2,
  label: "Connecting"
},
{
  value: 3,
  label: "Disconnecting"
}];

const connection = async () => {
    const options = {
      dbName: process.env.DB_NAME,
      user: process.env.DB_USER,
      pass: process.env.DB_PASSWORD
    }
    await mongoose.connect(process.env.DB_HOST, options);
    const state = Number(mongoose.connection.readyState);
  console.log(dbState.find(f => f.value === state).label, "to Database"); // connected to db
}
module.exports = connection;