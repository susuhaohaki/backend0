const express = require('express')
const routerAPI = express.Router()

const {getUsersAPI,postCreateUsersAPI,
    putUpdateUserAPI,deleteUserAPI,
    postUploadSingleFileAPI,postUploadMultipleFilesAPI,
   
    } = require('../controllers/apiController')

const {postCreateCustomer,postCreateArrayCustomer, 
    getAllCustomer,PutUpdateCustomer,deleteACustomer} = require('../controllers/customerController')
routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', postCreateUsersAPI);
routerAPI.put('/users', putUpdateUserAPI);
routerAPI.delete('/users', deleteUserAPI);

routerAPI.post('/file', postUploadSingleFileAPI); //có cũng đc ko có cũng ko sao 
routerAPI.post('/files', postUploadMultipleFilesAPI);


//customer
routerAPI.post('/customers', postCreateCustomer);
routerAPI.post('/customers-many',postCreateArrayCustomer)
routerAPI.get('/customers', getAllCustomer);
routerAPI.put('/customers',PutUpdateCustomer)
routerAPI.delete('/customers',deleteACustomer)

module.exports = routerAPI;// export default