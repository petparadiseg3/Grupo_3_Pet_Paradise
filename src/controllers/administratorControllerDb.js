const db = require("../database/models/index");

let administratorController = {
    administrador: function (req, res) {
        db.Product.findAll()
        .then(function(allProductos){
          res.render("admin/administrator.ejs",{allProductos})
        });
    }
};

module.exports = administratorController;