const express = require('express')
const router = express.Router()
const { verifyToken } = require('../middlewares/VerifyToken')
const { getA11Products } = require('../controllers/productController')


// route 
router.route('/')
    .get(verifyToken, getA11Products)

module.exports = router


