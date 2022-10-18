const fs = require("fs");
const path = require("path");
const jsonPath = path.resolve(__dirname, "../databaseJson/addPet.json");

const adopcionPet = JSON.parse(fs.readFileSync(jsonPath, "utf8"));

const adopcionController = {
  // Landing Page

  adopcion: (req, res) => {
    res.render(path.join(__dirname, "../views/adopciones/adopcion.ejs"), {
      adopcionPet,
    });
  },

  // Listado de productos/Mascotas
  adopcionPerros: (req, res) => {
    res.render(path.join(__dirname, "../views/adopciones/adopcionPerros.ejs"), {
      adopcionPet,
    });
  },

  adopcionGatos: (req, res) => {
    res.render(path.join(__dirname, "../views/adopciones/adopcionGatos.ejs"), {
      adopcionPet,
    });
  },

  adopcionOtrosAnimales: (req, res) => {
    res.render(path.join(__dirname, "../views/adopciones/adopcionOtros.ejs"), {
      adopcionPet,
    });
  },

  adopcionDetailPet: (req, res) => {
    res.render(path.join(__dirname, "../views/adopciones/adopcionDetailPet.ejs"), {
      adopcionPet,
    });
    
  },
  // Formulario de creación de productos/Mascotas view
  adopcionAddPet: (req, res) => {
    res.render("adopciones/adopcionAddPet.ejs");
  },

  adopcionSavePet: (req, res) => {
    console.log(req.body);
  },

  // Hacer el paso a paso de la base de datos con el Jason para poder hacer el target de post con la form
  // Falta la image para el fomulario de add pet
};

module.exports = adopcionController;
