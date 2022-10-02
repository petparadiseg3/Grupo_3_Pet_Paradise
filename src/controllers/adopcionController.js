let adopcionController = {

  adopcion: (req, res) => {
    res.render("adopciones/adopcion.ejs");
  },
  adopcionPerros: (req, res) => {
      res.render("adopciones/adopcionPerros.ejs", );
    },
}

module.exports = adopcionController;

