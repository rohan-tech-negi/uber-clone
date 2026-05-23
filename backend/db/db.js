const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      process.env.DB_CONNECT
    );

    console.log(
      `MongoDB Connected: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("Database connection failed:", error.message);

    // Exit process if DB connection fails
    process.exit(1);
  }
};

module.exports = connectToDb;