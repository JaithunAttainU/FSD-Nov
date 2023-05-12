const { sequelize } = require('../dbConfig')

const { DataTypes } = require('sequelize')

const MoviesModel = sequelize.define('movies', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      max: 20,
      notEmpty: true
    }
  },
  language: {
    type: DataTypes.STRING
  },
  releaseYear: {
    type: DataTypes.INTEGER,
    defaultValue: new Date().getFullYear()
  }
})

//To create table if it is not present
sequelize.sync()

module.exports = MoviesModel


