const path = require("path");

const controller = {
  index: (req, res) => {
    res.render(path.join(__dirname, "../views/home.ejs"));
  },

  register: (req, res) => {
    res.render(path.join(__dirname, "../views/usuarios/register.ejs"));
  },

  login: (req, res) => {
    res.render(path.join(__dirname, "../views/usuarios/login.ejs"));
  },

  productDetail1: (req, res) => {
    res.render(path.join(__dirname, "../views/productDetail1.ejs"));
  },

};

module.exports = controller;
