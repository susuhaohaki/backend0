const express = require('express')
const {getHomePage,getABC,gettest,
postCreateUser,getCreatePage, getUpdatePage,postUpdateUser} = require('../controllers/homeController')
const router = express.Router()

router.get('/', getHomePage)
router.get('/test', gettest)
router.get('/abc', getABC)
router.get('/create', getCreatePage)
router.get('/update/:id',getUpdatePage)

router.post('/create-user', postCreateUser)
router.post('/update-user', postUpdateUser) 
module.exports = router;// export default