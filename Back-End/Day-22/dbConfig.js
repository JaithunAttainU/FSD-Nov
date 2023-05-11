const mysql = require('mysql2/promise');

const dbName = 'BookMyShow'

async function initDB() {

  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: dbName
    });

    console.log("Connected successfully")
    return connection;
  } catch (err) {
    console.log("Error connecting to Database")
    process.exit()
  }
}

module.exports = {
  initDB
}