const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const db = require("../database/models");
const sequelize = db.sequelize;
const session = require("express-session");

const User = db.User;

let controllerUser = {
  viewRegister: function (req, res) {
    res.render("usuarios/register");
  },

  createUser: async (req, res) => {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render("usuarios/register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    try {
      let userInDB = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (userInDB) {
        return res.render("usuarios/register", {
          errors: {
            email: {
              msg: "Este email ya está registrado, inicie sesión!",
            },
          },
          oldData: req.body,
        });
      }
      User.create({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password: bcryptjs.hashSync(req.body.password, 10),
        address: req.body.address,
        country: req.body.country,
        phone: req.body.phone,
        date: req.body.date,
        picture_user: req.file.filename,
        role: 0,
      });

      res.redirect("/user/login");
    } catch (error) {
      console.log(error);
      res.render("../views/web/error404.ejs");
    }
  },
  login: (_req, res) => {
    res.render("usuarios/login");
  },
  loginProcess: async (req, res) => {
    try {
      let userToLogin = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (userToLogin) {
        let isOkThePassword = bcryptjs.compareSync(
          req.body.password,
          userToLogin.password
        );
        if (isOkThePassword) {
          delete userToLogin.password;
          req.session.userLogged = userToLogin;

          if (req.body.remember_user) {
            res.cookie("userEmail", req.body.email, {
              maxAge: 1000 * 60 * 2,
            });
          }

          return res.redirect("/user/profile");
        }
        return res.render("usuarios/login", {
          errors: {
            email: {
              msg: "Las credenciales son inválidas.",
            },
          },
        });
      }
      return res.render("usuarios/login", {
        errors: {
          email: {
            msg: "No se encuentra este email en la base de datos.",
          },
        },
      });
    } catch (error) {
			console.log(error);
      res.render("../views/web/error404.ejs");
		}
  },
	profile:(req, res) => {
		return res.render("usuarios/userProfile", {
			user: req.session.userLogged,
		});
	},
  editProfile:(req, res) => {
		return res.render("usuarios/editUser", {
			user: req.session.userLogged,
		});
	},
  updateProfile: async function (req, res) {
    let user = await req.session.userLogged
    
    newPicture = req.file ? req.file.filename : req.body.oldImagen;
    try {
      User.update({
        name: req.body.name,
        surname: req.body.surname,
        address: req.body.address,
        country: req.body.country,
        phone: req.body.phone,
        date: req.body.date,
        picture_user: newPicture,
        role: 0,
      }, {
          where: {
            id: user.id
          },
        });
        return res.redirect("/user/profile")
    } catch (error) {
			console.log(error);
      res.render("../views/web/error404.ejs");
		}
  },
	logout: (req, res) => {
		res.clearCookie("userEmail");
		req.session.destroy();
		return res.redirect("/");
	},

};

module.exports = controllerUser;
