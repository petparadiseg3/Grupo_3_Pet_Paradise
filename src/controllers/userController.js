const path = require("path");
const fs = require("fs");
const { file } = require("../models/user");
const fileProducts = require("../models/user");

let userController = {
  showRegister: (_req, res) => {
    res.render(path.join(__dirname, "../views/usuarios/register.ejs"));
  },

  showLogin: (req, res) => {
    res.render(path.join(__dirname, "../views/usuarios/login.ejs"));
  },

  createUser: (req, res) => {
    const newName = req.body.name;
    const newSurname = req.body.surname;   
    const newEmail = req.body.email;
    const newTel = req.body.tel;
    const newPassword = req.body.password;
    const samePassword = req.body.passwordConfirmacion;
    const newPictureProduct = req.file.filename;
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
};
module.exports = userController;
