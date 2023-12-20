const mongoose = require("mongoose");


const connectDB = (url) => {
  //console.log("database connected");
  return mongoose.connect(url);
};

module.exports = connectDB;
