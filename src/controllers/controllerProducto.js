const path = require("path");
const fs = require("fs");

const jsonPath = path.resolve(__dirname, "../../src/database/products.json");

const json = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

const allProductos = json.map((e) => {
  return {
    id: e.id,
    name_product: e.name_product,
    description: e.description,
    brand: e.brand,
    category: e.category,
    size: e.size,
    picture_product: e.picture_product,
    price: e.price,
  };
});

const productController = {
  allProductos: (req, res) => {
    res.render(path.join(__dirname, "../views/productos/productos.ejs"), {
      allProductos,
    });
  },

  create: (req, res) => {
    res.render(path.resolve(__dirname, "../views/productos/addProduct.ejs"), {
      allProductos,
    });
  },
  administrador: (req, res) => {
    const jsonPath = path.resolve(
      __dirname,
      "../../src/database/products.json"
    );

    const json = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

    const allProductos = json.map((e) => {
      return {
        id: e.id,
        name_product: e.name_product,
        description: e.description,
        brand: e.brand,
        category: e.category,
        size: e.size,
        picture_product: e.picture_product,
        price: e.price,
      };
    });

    res.render(path.resolve(__dirname, "../views/admin/administrarcopy.ejs"), {
      allProductos,
    });
  },

  getProductId: (req, res) => {
    const id = req.params.id;
    const product = allProductos.find((e) => e.id == parseInt(id));

    if (product) {
      res.render(path.resolve(__dirname, "../views/productos/productDetail.ejs"), {
        product,
      });
    } else {
      res.send(404);
    }
  },
  editProductId: (req, res) => {
    const id = req.params.id;
    const product = allProductos.find((e) => e.id == parseInt(id));

    if (product) {
      res.render(
        path.resolve(__dirname, "../views/productos/editProduct.ejs"),
        { product }
      );
    } else {
      res.send(404);
    }
  },
  updateProduct: (req, res) => {
    req.body.id = req.params.id;
    req.body.picture_product = req.file
      ? req.file.filename
      : req.body.oldImagen;

    let prodUpdate = allProductos.map((prod) => {
      if (prod.id == req.body.id) {
        return (prod = req.body);
      }
      return prod;
    });

    let productoActualizar = JSON.stringify(prodUpdate, null, 2);
    fs.writeFileSync(
      path.resolve(__dirname, "../database/products.json"),
      productoActualizar
    );

    res.redirect("/admin");
  },

  postProduct: (req, res) => {
    const newName = req.body.name_product;
    const newDescription = req.body.description;
    const newBrand = req.body.brand;
    const newCategory = req.body.category;
    const newSize = req.body.size;
    const newPictureProduct = req.file.filename;  //!Se pone req.file Porq los archivos no viaje por el body- filename es el archivo nuevo (multer de la router admin)
    const newPrice = req.body.price;

    const id = allProductos[allProductos.length - 1].id;
    const newId = id + 1;

    const obj = {
      id: newId,
      name_product: newName,
      description: newDescription,
      brand: newBrand,
      category: newCategory,
      size: newSize,
      picture_product: newPictureProduct,
      price: newPrice,
    };
    const jsonObj = JSON.stringify();
    allProductos.push(obj);
    let nuevoProductoGuardar = JSON.stringify(allProductos, null, 2);
    fs.writeFileSync(
      path.resolve(__dirname, "../database/products.json"),
      nuevoProductoGuardar
    );

    res.redirect("/products");
  },
  deleteProduct: (req, res) => {
    const id = req.params.id;
    const productFin = allProductos.filter((prod) => prod.id != id);
    let productoConArchivoBorrado = JSON.stringify(productFin, null, 2);
    fs.writeFileSync(path.resolve(__dirname, "../database/products.json"),
      productoConArchivoBorrado
    );

    res.redirect("/admin");
  },
};
module.exports = productController;
