const Sequelize = require('sequelize');

const sequelize = new Sequelize('booking-appointment', 'root', 'Clashofclans@02', {
    dialect: 'mysql',
    host: 'localhost',
});

module.exports = sequelize;