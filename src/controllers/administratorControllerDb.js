const db = require("../database/models/index");

let administratorController = {
  administrador: function (req, res) {
    try {
      let isAdmin = false;

      isAdmin = req.session.userLogged
      if (isAdmin.role == true) {
        db.Product.findAll()
          .then(function (allProductos) {
            res.render("admin/administrator.ejs", { allProductos })
          });

      } else {
        res.render("../views/web/error404.ejs");
      }

    } catch (error) {
      res.render("../views/web/error404.ejs");


    }

  }
};

module.exports = administratorController;