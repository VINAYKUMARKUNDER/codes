
const { checkJwt, verifyToken, signJwtToken } = require('../Auth/Login.controller');
const { createNewService, getAllListOfService, deleteServiceById, updateServiceById } = require('../Service/Service.service');
const {getAllCategory,createNewCategory,deleteCategoryById,getCategoryById,updateCategoryById} = require('./Category.service');
const express = require('express');
const router = express.Router();





router.get('/categories', verifyToken ,getAllCategory);
router.post('/',verifyToken, createNewCategory);
router.get('/:category_id/',verifyToken, getCategoryById);
router.delete('/:category_id/',verifyToken, deleteCategoryById);
router.put('/:category_id/',verifyToken, updateCategoryById);
router.post('/:category_id/service/',verifyToken,createNewService)
router.get('/:category_id/services/',verifyToken, getAllListOfService);
router.delete('/:category_id/service/:service_id/',verifyToken, deleteServiceById);
router.put('/:category_id/service/:service_id/',verifyToken, updateServiceById)



module.exports = router;