const express = require('express');

const app = express();
const  bodyparser =  require('body-parser');

app.use(bodyparser.json())

const {router} = require('../Auth/Login.controller')
const CategoryRoutes = require('../Category/Category.controller');
const ServiceRoutes = require('../Service/Service.controller');
const PriceRoutes = require('../Price/price.controller');



app.use('/api/v1/auth', router)
app.use('/api/v1/category', CategoryRoutes);
app.use('/api/v1/service', ServiceRoutes);
app.use('/api/v1/price', PriceRoutes);







module.exports = app;