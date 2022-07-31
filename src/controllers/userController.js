const path = require("path");
const fs = require("fs");
const { file } = require("../models/user");
const fileUser = require("../models/user");

let userController = {
  showRegister: (_req, res) => {
    res.render(path.join(__dirname, "../views/usuarios/register.ejs"));
  },

  showLogin: (req, res) => {
    res.render(path.join(__dirname, "../views/usuarios/login.ejs"));
  },

  createUser: (req, res) => {
    const newName = req.body.name;
    const newSurname = req.body.surname;   
    const newEmail = req.body.email;
    const newTel = req.body.tel;
    const newPassword = req.body.password;

    let newUsers = {
      id: fileUser.generateId(),
      name: newName,
      surname: newSurname,
      email: newEmail,
      tel: newTel,
      password: newPassword,
      picture_product: fileUser.imageUserNew(req.File),
    };
    
    fileUser.saveUser(newUsers)
    res.redirect("/user/register");
  },
  // edit:(req, res) =>{
  //   let id = req.params.id;
  //   res.render(path.resolve(__dirname, "../views/usuarios/register.ejs"))
  // }


};
module.exports = userController;
