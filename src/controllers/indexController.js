const path = require("path");

const Controller = {
  index: (req, res) => {
    res.render(path.join(__dirname, "../views/home.ejs"));
  },

  productDetail1: (req, res) => {
    res.render(path.join(__dirname, "../views/productDetail1.ejs"));
  },

};

module.exports = controller;

