const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  const MONGO_URI =
    process.env.MONGO_URI ||
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/?retryWrites=true&w=majority&appName=${process.env.MONGO_DB}`;

  if (!MONGO_URI) {
    console.error("MONGO_URI is not set!");
    return;
  }

  try {
    await mongoose.connect(MONGO_URI);
    console.log(`Connected to Mongo! "`);
  } catch (err) {
    console.error("Error connecting to mongo: ", err);
  }
};

module.exports = connectDB;
