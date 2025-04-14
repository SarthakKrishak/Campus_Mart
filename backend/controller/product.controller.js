const { validationResult } = require("express-validator");
const productModel = require("../models/product.model");

const registerProduct = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const {
            productName,
            productDescription,
            productCategory,
            productBrand,
            productColor,
            productOriginalPrice,
            productCondition,
            productNegotiable,
            productUsageDuration,
            productPayment,
            productPrice,
            productImage,
        } = req.body;


        /*
        @todo: Implement cloudinary storage
        */
        
        const imageArray = Array.isArray(productImage) ? productImage : [productImage];

        const isProductAlreadyExist = await productModel.findOne({
            productName,
            productCategory
        }).lean();

        if (isProductAlreadyExist) {
            return res.status(409).json({ message: "Product already exists in this category" });
        }

    
        const product = await productModel.create({
            productName,
            productDescription,
            productCategory,
            productBrand,
            productColor,
            productOriginalPrice,
            productCondition,
            productNegotiable,
            productUsageDuration,
            productPayment,
            productPrice,
            productImage: imageArray, 
        });

        res.status(201).json({ message: "Product registered successfully", product });

    } catch (error) {
        console.error("Error is in Product Controller:", error.stack);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = registerProduct;
