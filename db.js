const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const mongoURI = process.env.MONGO_URI;

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(mongoURI);
    console.log("✅ Connected to Mongo Successfully!");
  } catch (error) {
    console.log("❌ MongoDB connection failed:", error.message);
  }
};

module.exports = connectToMongo;

