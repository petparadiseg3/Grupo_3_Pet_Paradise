const path = require("path");

const controller = {
  index: (req, res) => {
    res.render(path.join(__dirname, "../views/home.ejs"));
  }
};

module.exports = controller;

