const path = require("path");

const controller = {
  index: (req, res) => {
    res.render(path.join(__dirname, "../views/index.ejs"));
  },

  cart: (req, res) => {
    res.render(path.join(__dirname, "../views/cart.ejs"));
  },

  register: (req, res) => {
    res.render(path.join(__dirname, "../views/register.ejs"));
  },

  login: (req, res) => {
    res.render(path.join(__dirname, "../views/login.ejs"));
  },

  addProducts: (req, res) => {
    res.render(path.join(__dirname, "../views/addProduct.ejs"));
  },

};

module.exports = controller;
