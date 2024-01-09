const express = require('express')
const routerAPI = express.Router()

const {getUsersAPI,postCreateUsersAPI,putUpdateUserAPI,deleteUserAPI} = require('../controllers/apiController')

routerAPI.get('/users', getUsersAPI);

routerAPI.post('/users', postCreateUsersAPI);

routerAPI.put('/users', putUpdateUserAPI);


routerAPI.delete('/users', deleteUserAPI);


module.exports = routerAPI;// export default