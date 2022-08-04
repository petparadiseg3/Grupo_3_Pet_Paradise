const path = require("path");
const fs = require("fs");
const { validationResult } = require("express-validator");
const User = require('../models/User');
const bcryptjs = require('bcryptjs')


let userController = {
  register: (_req, res) => {
    res.render(path.join(__dirname, "../views/usuarios/register.ejs"));
  },

  processRegister: (req, res) => {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render(
        path.join(__dirname, "../views/usuarios/register.ejs"),
        {
          errors: resultValidation.mapped(),
          oldData: req.body,
        }
      );
    }

    let userInDB = User.findByField('email', req.body.email)

    if (userInDB) {
      return res.render(
        path.join(__dirname, "../views/usuarios/register.ejs"),
        {
          errors: {
            email: {
              msg: 'Este email ya está registrado'
            }
          },
          oldData: req.body,
        }
      );
    }

    let userToCreate = {
      ...req.body,
      password: bcryptjs.hashSync(req.body.password, 10),
      picture_user: req.file.filename
    }
    let userCreated = User.create(userToCreate);
    return res.redirect('/user/login')
  },

  login: (req, res) => {
    res.render(path.join(__dirname, "../views/usuarios/login.ejs"));
  },

  loginProcess: (req, res) => {
    let userToLogin = User.findByField('email', req.body.email)

    if (userToLogin) {
      let isOkThePassword= bcryptjs.compareSync(req.body.password, userToLogin.password)
      if (isOkThePassword) {

          return res.send('Ok, puedes ingresar')//? Deberiamos hacer una vista de usuario
      }
      return res.render(path.join(__dirname, "../views/usuarios/login.ejs"), {
        errors: {
          email: {
            msg: 'Las credenciales son inválidas.'
          }
        }
      })
    }
    return res.render(path.join(__dirname, "../views/usuarios/login.ejs"), {
      errors: {
        email: {
          msg: 'No se encuentra este email en la base de datos.'
        }
      }
    })
  },

  profile: (req, res) => {
    return res.render("userProfile"); //! CREAR VISTA PARA EL PERFIL DEL USUARIO
  },

  //   let id = req.params.id;
  //   res.render(path.resolve(__dirname, "../views/usuarios/register.ejs"))
  // }
};
module.exports = userController;