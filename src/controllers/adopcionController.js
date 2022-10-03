let adopcionController = {
  adopcion: (req, res) => {
    res.render("adopciones/adopcion.ejs");
  },
  adopcionPerros: (req, res) => {
    res.render("adopciones/adopcionPerros.ejs");
  },

  adopcionGatos: (req, res) => {
    res.render("adopciones/adopcionGatos.ejs");
  },

  adopcionOtrosAnimales: (req, res) => {
    res.render("adopciones/adopcionOtros.ejs");
  },
};

module.exports = adopcionController;
