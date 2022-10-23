const db = require("../database/models/index");
const Product = db.Product;
const Category = db.Category;

let categoryController = {
  viewCreateCategoria: async function (req, res) {
    await Product.findAll();
    await Category.findAll().then(function (name, category) {
      return res.render("categorias/addCategory.ejs", { name, category });
    });
  },
  postCreateCategoria: async function (req, res) {
    try {
      await Category.create({
        name: req.body.nameCategory,
        image: req.file.filename,
      });
      res.redirect("/category");
    } catch (error) {
      console.log(error);
    }
  },
  todasLasMarcas: async function (req, res) {
    try {
      let alllCategories = db.Category.findAll();

      Promise.all([alllCategories]).then(([allCategories]) => {
        return res.render("categorias/allCategories.ejs", { allCategories });
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = categoryController;
