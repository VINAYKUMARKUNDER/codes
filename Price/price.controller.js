
const { verifyToken } = require('../Auth/Login.controller');
const {getAllPrice,createNewPrice,deletePriceById,getPriceById,updatePriceById} = require('./price.service');
const express = require('express');
const router = express.Router();



// router.get('/ser/',verifyToken, getAllPrice);
router.post('/create/',verifyToken, createNewPrice);
router.get('/get-one/:Price_id/',verifyToken, getPriceById);
router.delete('/delete-one/:Price_id/',verifyToken, deletePriceById);
router.put('/update-one/:Price_id/',verifyToken, updatePriceById);



module.exports = router;