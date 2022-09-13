const db = require("../database/models/index");
const Weight = db.Weight;
const Brand = db.Brand;
const Product = db.Product;
const Category = db.Category;
let productController = {
  crear: async function (req, res) {
    let alllBrands = db.Brand.findAll();
    let alllProducts = db.Product.findAll();
    let alllCategories = db.Category.findAll();

    Promise.all([alllBrands, alllProducts, alllCategories]).then(([allBrands, allProducts, allCategories]) => {
      return res.render("productos/addProduct.ejs", { allBrands, allProducts, allCategories });
    });
  },

  /* marca: async function (req, res) {
    await db.Product.findAll();
    await db.Brand.findAll().then(function (name, brand) {
      return res.render("productos/addBrand.ejs", { name, brand });
    });
  },
  crearMarca: async function (req, res) {
    try {
      await db.Brand.create({
        name: req.body.nameBrand,
        picture_brand: req.file.filename,
      });
      res.redirect("/products/create");
    } catch (error) {
      console.log(error);
    }
  }, */
  guardado: async function (req, res) {
    const {
      name,
      descriptions,
      size,
      stock,
      price /* , size2, stock2, price2 */,
    } = req.body;

    console.log(req.body);
    //const { size2, stock2, price2 } = req.body;
    try {
      let product = await db.Product.create({
        name,
        descriptions,
        image: req.file.filename,
        brand_id: req.body.brand,
        category_id: req.body.category
      });

      await db.Weight.create({
        size,
        stock,
        price,
        product_id: product.id,
      });

      /*       await db.Weight.create({
        size: size2,
        stock: stock2,
        price: price2,
        product_id: product.id,
      }); */

      res.redirect("/products");
    } catch (error) {
      console.log(error);
    }
  },

  listado: function (_req, res) {
    let allBrands = null;
    db.Product.findAll().then(function (allProductos) {
      res.render("productos/productos.ejs", { allProductos, allBrands });
    });
  },
  buscarPorMarca: async function (req, res) {
    try {
      let brandId = req.query.marca;
/*       let categoryId = req.query.categoria; */
      let alllBrands = Brand.findOne({
        where: {
          id: brandId,
        },
      });
      let alllProducts = Product.findAll({
        where: {
          brand_Id: brandId,
        },
      });
/*       let allCategories = Category.findAll({
        where: {
          categoryId: categoryId,
        },
      }); */

      Promise.all([alllBrands, alllProducts]).then(
        ([allBrands, allProductos]) => {
          return res.render("productos/productos.ejs", {
            allBrands,
            allProductos,
          });
        }
      );
    } catch (error) {
      console.log(error);
    }
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
