const mongoose = require('mongoose')
//shape data
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    city: String,
});
const User = mongoose.model('user', userSchema);

module.exports = User;
