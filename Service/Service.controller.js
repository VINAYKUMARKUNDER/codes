
const { verifyToken } = require('../Auth/Login.controller');
const { getAllPriceByServiceId, createNewPrice } = require('../Price/price.service');
const {getAllService,createNewService,deleteServiceById,getServiceById,updateServiceById, getAllListOfService} = require('./Service.service');
const express = require('express');
const router = express.Router();



router.get('/:service_id/prices',verifyToken, getAllPriceByServiceId);
router.post('/:service_id/price',verifyToken, createNewPrice);





module.exports = router;