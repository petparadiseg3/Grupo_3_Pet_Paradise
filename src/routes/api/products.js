const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productAPIController');

router.get('/products', productsAPIController.list);

module.exports = router;