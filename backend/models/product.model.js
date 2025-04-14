const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: true,
            trim: true,
        },
        productDescription: {
            type: String,
            required: true,
            trim: true,
            minLength: [10, "Description should have at least 10 characters"],
            maxLength: [500, "Description should not exceed 500 characters"],
        },
        productCategory: {
            type: String,
            required: true,
            enum: ["Electronics", "Clothing", "Daily Use", "Cycle", "Others"],
            trim: true,
        },
        productBrand: {
            type: String,
            required: true,
            trim: true,
        },
        productColor: {
            type: String,
            required: true,
            trim: true,
        },
        productOriginalPrice: {
            type: Number,
            required: true,
            min: [0, "Price should be greater than 0"],
            max: [100000, "Price should not exceed 100000"],
        },
        productCondition: {
            type: String,
            required: true,
            enum: ["Excellent", "Good", "Poor"],
        },
       productNegotiable: {
            type: String,
           required: true,
           enum: ["Yes", "No"]
        },
        productUsageDuration: {
            type: String,
            required: true,
            enum: ["New", "Used", "Refurbished"],
        },
        productPayment: {
            type: String,
            required: true,
            enum: ["Cash", "UPI", "Both"],
        },
        productPrice: {
            type: Number,
            required: true,
            min: [0, "Price should be greater than 0"],
            max: [100000, "Price should not exceed 100000"],
        },
        productImage: {
            type: [String], 
            required: true,
        },
    },
    { timestamps: true } // createdAt & updatedAt
);

module.exports = mongoose.model("Product", productSchema);
