const express = require("express")
const router = express.Router();
const { body } = require('express-validator');
const registerProduct = require("../controller/product.controller");

router.post("/register", [
    body("productCategory").isIn(["Electronics", "Clothing", "Daily Use", "Cycle", "Others"]).withMessage("Invalid Category"),
    body("productPrice").isNumeric().withMessage("Invalid Price"),
    body("productDescription").isLength({ min: 10 }).withMessage("Description should be 10 characters"),
    body("productImage").isURL().withMessage("Invalid Image"),
], registerProduct);



module.exports = router;