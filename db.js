const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'mansour', // Database name
  'mansouruser', // User
  'IClq55N9bYkisNwG98hYl2Zy9I2HmqzR', // Password
  {
    host: 'dpg-ck9d0fv0vg2c73d0uvjg-a', // Host
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
