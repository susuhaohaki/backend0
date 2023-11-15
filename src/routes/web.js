const express = require('express')
const {getHomePage,getABC,gettest,postCreateUser,getCreatePage, getUpdatePage} = require('../controllers/homeController')
const router = express.Router()

router.get('/', getHomePage)
router.get('/test', gettest)
router.get('/abc', getABC)
router.get('/create', getCreatePage)
router.get('/update/:id',getUpdatePage)

router.post('/create-user', postCreateUser)
  
module.exports = router;// export default