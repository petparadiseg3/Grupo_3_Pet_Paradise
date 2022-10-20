const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Products = db.Product;

const productAPIController = {
    'list': (req, res) => {
        db.Product.findAll()
        .then(products => {
            let respuesta = {
                meta: {
                    status : 200,
                    total : products.length,
                    url : 'api/products'
                },
                data: products
            }
                res.json(respuesta);
        })
    }

}

module.exports = productAPIController