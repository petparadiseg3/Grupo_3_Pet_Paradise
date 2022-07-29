const path = require("path");
const fs = require("fs");
const { file } = require("../models/user");
const fileProducts = require("../models/user");

let userController = {
  register: (req, res) => {
    res.render(path.join(__dirname, "../views/usuarios/register.ejs"));
  },

  login: (req, res) => {
    res.render(path.join(__dirname, "../views/usuarios/login.ejs"));
  },
};
module.exports = userController;
