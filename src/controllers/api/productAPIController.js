const path = require("path");
const db = require("../../database/models");
const Sequelize = db.sequelize;
const { Op } = require("sequelize");

const Category = db.Category;
const Product = db.Product;

/* let productControllerAPI = {
  buscador: async (req, res) => {
    

    try {
      let allCategories = await Category.findAll();
      let result = await Product.findAll({ where: {  } });

      res.json(result);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = productControllerAPI; */
const Productoo = db.Product.findAll()

const productAPIController = {
    

    list: (req, res) => {
        db.Product.findAll({
            include: [
                {
                    model: db.Category, as: 'categoria', 
                    attributes: ['name']
                }],
            


        }).then(result => {
            
            return res.status(200).json(result.map((e)=> {
                return {
                    id: e.id,
                    name: e.name,
                    descriptions: e.descriptions,
                    detail: "/api/products/" + e.id,
                    categoria:e.categoria
                }
            }));
        })
    },

    detail: (req, res) => {
        db.Product.findByPk(req.params.id)
            .then((product) => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: "/api/products/:id",
                    },
                    data: product,
                };
                res.json(respuesta);
            })
            .catch((error) => console.log(error));
    },
};

module.exports = productAPIController;
