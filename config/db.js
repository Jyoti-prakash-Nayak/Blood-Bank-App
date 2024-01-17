const mongoose = require("mongoose");
const colors=require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Connected To MongoDB Database: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Mongodb Database Error: ${error}`.bgRed.white);
 
  }
};

module.exports = connectDB;
