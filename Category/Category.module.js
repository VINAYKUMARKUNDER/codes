
const { DataTypes } = require('sequelize');
const db = require('../database')


const Category = db.define('Category',
{

    category_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },

    category_name:{
        type:DataTypes.STRING,
        allowNull:true
    }
},

{
    tableName:'Category',
    createdAt:true,
    updatedAt:true,
    timestamp:true
}
);

Category.sync().then(()=>{console.log('category table')}).catch({})



module.exports = Category;