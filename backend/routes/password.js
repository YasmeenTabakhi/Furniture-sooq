const express = require('express')
const router = express.Router()
const { sendForgotPasswordLink } = require('../controllers/passwordController')

router.route('/forget-password')
    .post(sendForgotPasswordLink)


// router.route('/reset-password/:userId/:token')
//     .get(getResetPasswordView)
//     .post(resetThePassword)


module.exports = router