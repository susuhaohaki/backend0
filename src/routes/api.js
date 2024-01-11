const express = require('express')
const routerAPI = express.Router()

const {getUsersAPI,postCreateUsersAPI,putUpdateUserAPI,deleteUserAPI,postUploadSingleFileAPI,postUploadMultipleFilesAPI} = require('../controllers/apiController')
const {postCreateCustomer} = require('../controllers/customerController')
routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', postCreateUsersAPI);
routerAPI.put('/users', putUpdateUserAPI);
routerAPI.delete('/users', deleteUserAPI);

routerAPI.post('/file', postUploadSingleFileAPI); //có cũng đc ko có cũng ko sao 
routerAPI.post('/files', postUploadMultipleFilesAPI);

routerAPI.post('/customers', postCreateCustomer);

module.exports = routerAPI;// export default