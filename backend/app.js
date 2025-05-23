const dotenv = require("dotenv")
dotenv.config();
const express = require('express')
const app = express()
const cors = require("cors");

// Calling the database
const databaseConnection = require('./db/db')
databaseConnection();
const cookieParser = require('cookie-parser')
const productRoute = require("./routes/product.routes.js");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.get("/", (req, res) => {
    res.send("Hello, World!")
})

app.use("/product", productRoute);


const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => {
    console.log(`🔥 Server started at ${PORT}`);
})
