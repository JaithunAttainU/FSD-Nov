const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
  'BookMyShow', //DatabaseName
  'root', //UserName
  'password', //Password
  {
    dialect: 'mysql', //Database
    host: 'localhost' //Host
  }
)

async function initDB() {
  try {
    await sequelize.authenticate();
    console.log("Successfully Connected to Database")
  } catch (error) {
    console.log("Error connecting to DB")
    process.exit()
  }
}


module.exports = {
  sequelize, initDB
}

class Person {
  constructor() {
    this.name = 'Hello';
  }

  getName() {
    return this.name
  }

}