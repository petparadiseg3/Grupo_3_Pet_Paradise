const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productAPIController');
//const productControllerAPI = require('../../controllers/api/productAPIController');

router.get('/products', productsAPIController.list);
router.get('/products/:id', productsAPIController.detail)
/* router.get('/products', productControllerAPI.buscador); */


module.exports = router;