

const { DataTypes } = require('sequelize');
const db = require('../database');
const ServiceModule  = require('../Service/Service.module')

const Price = db.define('Price', {
    price_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    duration:{
        type:DataTypes.STRING,
        allowNull:true
    },
    price:{
        type:DataTypes.DECIMAL,
        allowNull:true
    },

    price_type:{
        type:DataTypes.ENUM('Hourly','Weekly', 'Monthly'),
        defaultValue:'Hourly',
        allowNull:true
    }
},
{
    tableName:'Price',
    timestamps:true,
    createdAt:true,
    updatedAt:true
})

Price.belongsTo(ServiceModule,{foreignKey:'service_id'});
Price.sync(()=>{console.log('category table created')})


module.exports = Price