const mongoose = require("mongoose")

async function initDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL, { dbName: 'sample_mflix' })
    console.log("Connected to DB Successfully")
  } catch (error) {
    console.log("Error connecting to DB")
    process.exit()
  }
}

module.exports = {
  initDB
}