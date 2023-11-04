

const { DataTypes } = require('sequelize');
const db = require('../database');
const CategoryModule = require('../Category/Category.module');

const Service = db.define('Service',{
    service_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    service_name:{
        type:DataTypes.STRING,
        allowNull:true
    },
    service_type:{
        type:DataTypes.ENUM('Normal','VIP'),
        defaultValue:'Normal',
        allowNull:true
    }
},{
    tableName:'Service',
    timestamps:true,
    createdAt:true,
    updatedAt:true
})


Service.belongsTo(CategoryModule,{foreignKey:'category_id'})

Service.sync().then(()=>{console.log('service table')}).catch({})




module.exports= Service;