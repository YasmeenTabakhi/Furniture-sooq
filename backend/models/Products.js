const mongoose = require('mongoose');
const Joi = require('joi');

const Schema = mongoose.Schema

const ProductskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100,
        minLength: 3
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxLength: 1024,
        minLength: 0
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
    quantity: {
        type: Number,
    },
    profilePhoto: {
        type: Object,
        default: {
            url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            publicId: null
        }
    },
},)


const Product = mongoose.model('Product', ProductskSchema);

// Product.insertMany([
//     { title: 'product 1', description: "des product 1", price: 200, quantity: 12 },
//     { title: 'product 2', description: "des product 2", price: 300, quantity: 42 },
//     { title: 'product 3', description: "des product 3", price: 400, quantity: 66 },
//     { title: 'product 4', description: "des product 4", price: 500, quantity: 45 },
//     { title: 'product 5', description: "des product 5", price: 600, quantity: 144 },
//     { title: 'product 6', description: "des product 6", price: 700, quantity: 34 },
//     { title: 'product 7', description: "des product 7", price: 800, quantity: 232 },
// ]).then(function () {
//     console.log("Data inserted")  // Success
// }).catch(function (error) {
//     console.log(error)      // Failure
// });

//validate Create Product



module.exports = { Product }