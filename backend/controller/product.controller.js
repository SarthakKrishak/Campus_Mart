const { validationResult } = require("express-validator");
const productModel = require("../models/product.model");

const registerProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    productName,
    productCategory,
    productDescription,
    productCondition,
    productDate,
    productAddress,
    productPrice,
    productImage,
    } = req.body;

    const isProductAlreadyExist = await productModel.findOne({ productName }).lean();


    if (isProductAlreadyExist) {
        return res.status(409).json({ message: "Product already exists" });

    }
    try {
        const product = await productModel.create({
            productName,
            productCategory,
            productDescription,
            productCondition,
            productDate,
            productAddress,
            productPrice,
            productImage,
        });

        res.status(201).json({message:"Product registered successfully", product });
    } catch (error) {
        console.log("There is some error in creating product",error.message);
        res.status(500).json({message:"Internal server error"})
    }
};

module.exports = registerProduct;