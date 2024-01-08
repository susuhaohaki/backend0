const express = require('express')
const routerAPI = express.Router()

const {getUsersAPI,postCreateUsersAPI,putUpdateUserAPI,} = require('../controllers/apiController')

routerAPI.get('/users', getUsersAPI);

routerAPI.post('/users', postCreateUsersAPI);

routerAPI.put('/users', putUpdateUserAPI);


module.exports = routerAPI;// export default