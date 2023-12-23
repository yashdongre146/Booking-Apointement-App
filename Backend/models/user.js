const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const USER = sequelize.define('users',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
        
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    number:{
        type: Sequelize.DOUBLE,
        allowNull:false,
    },
});

module.exports = USER