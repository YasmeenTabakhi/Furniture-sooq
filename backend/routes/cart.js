const express = require('express')
const router = express.Router()
const { verifyToken } = require('../middlewares/VerifyToken')
const { getCartCrtl, addCartCtrl, deleteProductCart } = require('../controllers/cartController')


router.route('/')
    .get(verifyToken, getCartCrtl)


router.route('/:id')
    .put(verifyToken, addCartCtrl)
    .delete(verifyToken, deleteProductCart)



module.exports = router


