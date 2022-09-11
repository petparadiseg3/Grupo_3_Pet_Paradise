const db = require("../database/models/index");
const Weight = db.Weight;

let productController = {
  crear: function (req, res) {
    db.Product.findAll().then(function (name) {
      return res.render("productos/addProduct.ejs", { name });
    });
  },

  guardado: async function (req, res) {
    const { name, descriptions, size, stock, price, size2, stock2, price2 } =
      req.body;
    //const { size2, stock2, price2 } = req.body;

    try {
      let product = await db.Product.create({
        name,
        descriptions,
        image: req.file.filename,
      });

      await db.Weight.create({
        size,
        stock,
        price,
        product_id: product.id,
      });

      await db.Weight.create({
        size: size2,
        stock: stock2,
        price: price2,
        product_id: product.id,
      });

      res.redirect("/products");
    } catch (error) {
      console.log(error);
    }
  },

  listado: function (req, res) {
    db.Product.findAll().then(function (allProductos) {
      res.render("productos/productos.ejs", { allProductos });
    });
  },

  detalle: async function (req, res) {
    let pesos = await Weight.findAll({
      where: { product_id: req.params.id },
    });

    await db.Product.findByPk(req.params.id).then(function (product) {
      res.render("productos/productDetail.ejs", { product, pesos });
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


// Product Weight Controller - Generar campo para poder poblar las tablas con 10 productos y 10 usuarios con Mookaro para ver si la tabla esta fucionando para los datos o no, asociar precios y persos a diferentes productos - Cruce de tablas
// Escribir codigo de sql para cargarlas de datos. 



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
