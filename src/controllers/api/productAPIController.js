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


const productAPIController = {
    
    list: (req, res) => {

        let getProduct = db.Product.findAll({
            include: 
            [{
                model: db.Category, as: 'categoria', 
                attributes: ['name'],
                       
            }],       
        });

        let getCategories = db.Category.findAll({ 
            include: 
            [{
                model: db.Product, as: 'product', 
                attributes: ['id','name'],
                        
            }],
                            
        });

        Promise.all([getProduct, getCategories])
            .then(([products, categories]) => {
                let respuesta =  {

                    meta: {
                        status: 200,
                        count: products.length,
                        url: "api/products",
                    },

                    products : products.map((e) => {
                        return {
                            id: e.id,
                            name: e.name,
                            descriptions: e.descriptions,
                            detail: "/api/products/" + e.id,
                            category: e.categoria,
                        };
                    }),
    
                    categories: categories.map((e)=>{
                        return {
                            id: e.id,
                            name:e.name,
                            product:e.product,
                        
                        } 
                    }),

                    countByCategory: categories.map((e)=>{
                        return {
                            name:e.name,
                            count:e.product.length,
                       
                        } 
                    })
                
                }
                res.status(200).json(respuesta);  
                  
            })
        .catch((error) => console.log(error));
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
