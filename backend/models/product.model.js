const mongoose = require('mongoose')


const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productCategory: {
        type: String,
        required: true,
        enum:["Electronics","Clothing","Daily Use","Cycle","Others"]
    },
    productDescription: {
        type: String,
        required: true,
        trim: true,
       minLength:[10,'Description should have atleast 10 characters']
    },
    productCondition: {
        type: String,
        required: true,
        enum:["Excellent","Good","Poor"]
    },
    productDate: {
        type: Date,
        default: Date.now
    },
    productAddress: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productImage: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model("product", productSchema);