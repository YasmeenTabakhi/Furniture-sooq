const express = require('express')
const router = express.Router()
const { verifyToken } = require('../middlewares/VerifyToken')
const { getA11Products, getProductsById, newQuantityProduct } = require('../controllers/productController')


router.route('/')
    .get(getA11Products)

router.route('/:id')
    .get(getProductsById)
    .put(verifyToken, newQuantityProduct)

module.exports = router


