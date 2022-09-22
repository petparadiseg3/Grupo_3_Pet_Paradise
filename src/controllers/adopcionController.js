const path = require("path");

const adopcionController = {
  adopcion: (req, res) => {
    res.render(path.join(__dirname, "../views/adopciones/adopcion.ejs"));
  },
};

module.exports = adopcionController;
