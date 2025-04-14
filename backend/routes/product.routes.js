const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const registerProduct = require("../controller/product.controller");

router.post(
  "/register",
  [
    body("productCategory")
      .isIn(["Electronics", "Clothing", "Daily Use", "Cycle", "Others"])
      .withMessage("Invalid Category"),

    body("productPrice")
      .isNumeric()
      .withMessage("Price must be a number")
      .custom((value) => value > 0)
      .withMessage("Price should be greater than 0"),

    body("productDescription")
      .isLength({ min: 10, max: 500 })
      .withMessage("Description should be between 10 and 500 characters"),

    body("productImage")
      .optional() // Only validate if provided
      .isString()
      .withMessage("Invalid Image Format"),

    body("productCondition")
      .isIn(["Excellent", "Good", "Poor"])
      .withMessage("Invalid Product Condition"),

    body("productUsageDuration")
      .isIn(["New", "Used", "Refurbished"])
      .withMessage("Invalid Usage Duration"),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log("Error is in Product Routes");
        return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  registerProduct
);

module.exports = router;
