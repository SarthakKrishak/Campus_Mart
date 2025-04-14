const mongoose = require("mongoose");

const databaseConnection = () => {
  mongoose
    .connect(`${process.env.MONGODB_URI}`)
    .then(console.log(`🚀 MongoDB Connected`))
    .catch((err) => {
      console.log("Error is in DB connection");
      console.log(err.message);
    });
};


module.exports = databaseConnection;