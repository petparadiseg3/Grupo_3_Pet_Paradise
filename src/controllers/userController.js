const path = require("path");
const fs = require("fs");
const { file } = require("../models/user");
const fileUser = require("../models/user");
const { validationResult } = require("express-validator");

let userController = {
  register: (_req, res) => {
    res.render(path.join(__dirname, "../views/usuarios/register.ejs"));
  },

  /* createUser: (req, res) => {
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
      picture_user: fileUser.imageUserNew(req.file),
    };

    fileUser.saveUser(newUsers);
    res.redirect("/user/register");
  },
 */
  showLogin: (req, res) => {
    res.render(path.join(__dirname, "../views/usuarios/login.ejs"));
  },

  processRegister: (req, res) => {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render(
        res.render(path.join(__dirname, "../views/usuarios/register.ejs"), {
          errors: resultValidation.mapped(),
          oldData: req.body
        })
      );
    }
    
    //acá
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
      picture_user: fileUser.imageUserNew(req.file),
    };

    fileUser.saveUser(newUsers);
    return res.redirect("/user/register");
  },

  //   let id = req.params.id;
  //   res.render(path.resolve(__dirname, "../views/usuarios/register.ejs"))
  // }
};
module.exports = userController;
