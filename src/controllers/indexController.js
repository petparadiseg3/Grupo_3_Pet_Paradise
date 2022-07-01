const path = require("path");

const controller = {
  index: (req, res) => {
    res.render(path.join(__dirname, "../views/index.ejs"));
  },

  cart: (req, res) => {
    res.render(path.join(__dirname, "../views/cart.ejs"));
  },
};

module.exports = controller;
