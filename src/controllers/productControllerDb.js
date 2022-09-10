const db = require("../database/models/index");

let productController = {
  crear: function (req, res) {
    db.Product.findAll().then(function (name) {
      return res.render("productos/addProduct.ejs", { name });
    });
  },

  guardado: async function (req, res) {
    const { name, descriptions, size, stock, price } = req.body;

    let productSize = await db.Weight.create({ size, stock, price });

    await db.Product.create(
      {
        name,
        descriptions: descriptions,
        image: req.file.filename,
        weight_id: productSize.id,
      }
    );
    res.redirect("/products");
  },

  listado: function (req, res) {
    db.Product.findAll().then(function (allProductos) {
      res.render("productos/productos.ejs", { allProductos });
    });
  },

  detalle: function (req, res) {
    db.Product.findByPk(req.params.id).then(function (product) {
      res.render("productos/productDetail.ejs", { product });
    });
  },

  editar: function (req, res) {
    db.Product.findByPk(req.params.id).then(function (product) {
      res.render("productos/editProduct.ejs", { product });
    });
  },

  actualizar: function (req, res) {
    db.Product.update(
      {
        name: req.body.name,
        descriptions: req.body.descriptions,
        image: req.file.filename,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.redirect("/products/" + req.params.id);
  },

  borrar: function (req, res) {
    db.Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/admin");
  },
};

module.exports = productController;

//!No borrar
// const list = (req, res) => {
//   db.Product.findAll()
//     .then(allProductos => {   //promesa con .then
//       res.render("productos/productos.ejs",{allProductos})
//   })
// };

// const detail = async (req, res) => {  //promesa con async

//     const {id} = req.params;
//     const product =  await db.Product.findByPk(id)
//     res.render("productos/productDetail", {product})
// };

// module.exports = {
//   list, detail
// }
