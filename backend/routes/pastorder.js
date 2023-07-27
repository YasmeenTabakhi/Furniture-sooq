const express = require('express')
const router = express.Router()
const { verifyToken } = require('../middlewares/VerifyToken')
const { addPastOrederCtrl, getPastOrder } = require('../controllers/PastOrderController')


router.route('/')
    .post(verifyToken, addPastOrederCtrl)
    .get(verifyToken, getPastOrder)



module.exports = router


