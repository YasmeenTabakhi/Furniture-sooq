const asyncHandler = require('express-async-handler')
const { Product, validateCreateProduct } = require('../models/Products')
const { User } = require('../models/User')
const jwt = require('jsonwebtoken')


/**
* 
*  @desc Get all Product
*  @route /api/product
*  @method GET
*  @access public 
* 
*/
module.exports.getA11Products = asyncHandler(async (req, res) => {
    const product = await Product.find({}).populate('')
    res.status(200).json(product)
})



