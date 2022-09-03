const db = require("../database/models/index");
const path = require("path");

const list = (req, res) => {
  db.Product.findAll()
    .then(allProductos => {   //promesa con .then
      res.render("productos/productos.ejs",{allProductos})
  })
};

const detail = async (req, res) => {  //promesa con async
 
    const {id} = req.params;
    const product =  await db.Product.findByPk(id)
    res.render("productos/productDetail", {product})
};

module.exports = {
  list, detail
}