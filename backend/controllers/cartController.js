const asyncHandler = require('express-async-handler')
const { User } = require('../models/User')
const { Product } = require('../models/Products')
const jwt = require('jsonwebtoken')



/**-------------------------------------------------------------
 * @desc    Gat Al Cart
 * @route   /api/cart 
 * @method  Get
 * @access  private ( only logged in user )
---------------------------------------------------------------*/
module.exports.getCartCrtl = asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET_KEY)
    const user = await User.findById(decoded.id)
    res.status(200).json(user)
})



/**-------------------------------------------------------------
 * @desc    Add Cart
 * @route   /api/product/:id
 * @method  PUT
 * @access  private ( only logged in user )
---------------------------------------------------------------*/
module.exports.addCartCtrl = asyncHandler(async (req, res) => {

    const cartProduct = await Product.findById(req.params.id)
    if (!cartProduct) {
        res.status(404).json({ message: "Not found" })
    }

    const token = req.headers.token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

    let user = await User.findById(decoded.id)

    if (cartProduct.quantity > 0) {
        const findID = user.cart.find(item => item.id === cartProduct._id.toString())

        if (findID) {
            res.status(404).json({ message: "It has already been added. You can increase the amount of the cart" })
        } else {

            const obj = {
                id: cartProduct.id,
                title: cartProduct.title,
                description: cartProduct.description,
                price: cartProduct.price,
                productImage: {
                    url: cartProduct.profilePhoto.url,
                    publicId: null
                },
                quantity: req.body.count
            }

            user.cart.push(obj)
            await cartProduct.save()
            await user.save()
            res.status(200).json({ message: 'The request has been added', user })
        }
    }
})


/**-------------------------------------------------------------
 * @desc    Delete Product Cart
 * @route   /api/cart/:id
 * @method  Delete
 * @access  private ( only logged in user )
---------------------------------------------------------------*/
module.exports.deleteProductCart = asyncHandler(async (req, res) => {
    const cartProduct = await Product.findById(req.params.id)
    if (!cartProduct) {
        res.status(404).json({ message: "Not found" })
    }

    cartProduct.quantity += 1;

    const decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET_KEY)
    const user = await User.findById(decoded.id)

    user.cart = user.cart.filter(product => product.id !== req.params.id);

    await user.save()
    await cartProduct.save()

    res.status(200).json(user)
})

