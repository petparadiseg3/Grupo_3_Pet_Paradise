const db = require("../../database/models");
const Sequelize = db.sequelize;
const { Op } = require("sequelize");


const productAPIController = {
    
    list: (req, res) => {

        let getProducts = db.Product.findAll({
            include: [
                {model: db.Category, as: 'categoria', attributes: ['id','name']}
            ],

        });

        let getCategories = db.Category.findAll({ 
            include: [
                {model: db.Product, as: 'product', attributes: ['id','name']}
            ],
                            
        });

        Promise.all([getProducts, getCategories])
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
        db.Product.findByPk(req.params.id, {
            include: [
                {model: db.Category, as: 'categoria',attributes: ['id','name']},
                {model: db.Brand, as: 'marca', attributes: ['id','name']}          
            ],       
        })
            .then((product) => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: "/api/products/:id",
                    },
                    data: {
                        id: product.id,
                        name: product.name,
                        descriptions: product.descriptions,
                        image: "http://localhost:3001/images-back/productos/" + product.image,
                        brand: product.marca,
                        category: product.categoria
                    }
                };
                res.json(respuesta);
            })
        .catch((error) => console.log(error));
    },
};

module.exports = productAPIController;
