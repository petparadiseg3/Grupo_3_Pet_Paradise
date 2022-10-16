const adopcionController = {
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
  adopcionAddPet: (req, res) => {
    res.render("adopciones/adopcionAddPet.ejs");

  // adopcionAddPetSave: (req, res) => {
  //   res.render("src/databaseJson/addPetSave.json");
  
  },
  
// Hacer el paso a paso de la base de datos con el Jason para poder hacer el target de post con la form 
  // Falta la image para el fomulario de add pet 

};

module.exports = adopcionController;
