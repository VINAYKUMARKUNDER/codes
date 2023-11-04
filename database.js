
const {Sequelize} =   require('sequelize');
require('dotenv').config();

const DB_NAME= process.env.DB_NAME || 'codes';
const DB_USERNAME= process.env.DB_NAME || 'root';
const DB_PASSWORD= process.env.DB_NAME || 'Vinay@1313';
const DB_HOST= process.env.DB_NAME || 'localhost';

const conn = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host:DB_HOST,
    dialect:'mysql'
    

})


module.exports = conn;