const path = require("path");

let cartController = {
  cart: (req, res) => {
    res.render(path.join(__dirname, "../views/cart.ejs"));
  },
};

module.exports = cartController;
