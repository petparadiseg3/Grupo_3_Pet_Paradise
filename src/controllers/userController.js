const path = require("path");
const fs = require("fs");
const { validationResult } = require("express-validator");
const User = require('../models/User');

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
		let userToCreate ={
			...req.body,
			picture_user: req.file.filename
		}
		User.create(userToCreate);
		return res.send("Ok, las validaciones se pasaron y no tienes errores")
	},

	showLogin: (req, res) => {
		res.render(path.join(__dirname, "../views/usuarios/login.ejs"));
	},

	profile: (req, res) => {
		return res.render("userProfile"); //! CREAR VISTA PARA EL PERFIL DEL USUARIO
	},

	//   let id = req.params.id;
	//   res.render(path.resolve(__dirname, "../views/usuarios/register.ejs"))
	// }
};
module.exports = userController;