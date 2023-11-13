const express = require('express')
const {getHomePage,getABC,gettest} = require('../controllers/homeController')
const router = express.Router()

router.get('/', getHomePage)
router.get('/test', gettest)
router.get('/abc', getABC)
  
module.exports = router;// export default