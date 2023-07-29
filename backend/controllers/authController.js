const asyncHandler = require('express-async-handler')
const { User, ValidateRegisterUser, ValidateLoginUser } = require('../models/User')
const bcrypt = require('bcrypt')



/**
 * 
 *  @desc Register New User
 *  @route /api/auth/register
 *  @method POST
 *  @access public 
 * 
 */
const register = asyncHandler(async (req, res) => {
    const { error } = ValidateRegisterUser(req.body)
    if (error) {
        return res.status(400).json({ message: error.details[0].message })
    }

    let user = await User.findOne({ email: req.body.email })
    if (user) {
        return res.status(400).json("This user is already registered.")
    }

    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt)

    user = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
    })

    const result = await user.save()
    const token = user.generateToken()
    const { password, ...other } = result._doc
    res.status(201).json({ ...other, token })

})



/**
 * 
 *  @desc Login User
 *  @route /api/auth/login
 *  @method POST
 *  @access public 
 * 
 */
const login = asyncHandler(async (req, res) => {
    const { error } = ValidateLoginUser(req.body)
    if (error) {
        return res.status(400).json({ message: error.details[0].message })
    }

    let user = await User.findOne({ email: req.body.email })
    if (!user) {
        return res.status(401).json("invalid email or password")
    }

    const isPasswordMatch = await bcrypt.compare(req.body.password, user.password)
    if (!isPasswordMatch) {
        return res.status(401).json("invalid email or password")
    }

    const token = user.generateToken()
    const { password, ...other } = user._doc
    res.status(201).json({ ...other, token })
})



module.exports = { register, login }