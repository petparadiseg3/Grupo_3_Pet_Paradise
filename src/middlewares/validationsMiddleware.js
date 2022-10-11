const { body } = require("express-validator");
const path = require("path");

module.exports = [
  body("name").notEmpty().withMessage("Tienes que escribir un nombre").trim(),
  body("surname")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Tienes que escribir tu apellido"),
  body("email")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Tienes que escribir un email")
    .bail()
    .escape()
    .normalizeEmail()
    .isEmail()
    .withMessage("Debes escribir un formato de correo válido"),
  body("phone")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Tienes que escribir un telefono"),
  body("password")
  .trim()
  .escape()
  .notEmpty()
  .withMessage("Tienes que escribir una contraseña")
  .isLength({ min: 8 })
  .withMessage("La contraseña debe contener 8 caracteres"),
  body("picture_user").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".png", ".gif", ".jpeg"];
    if (!file) {
      throw new Error("Tienes que subir una imagen");
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones permitidas son ${acceptedExtensions.join(", ")}`
        );
      }
    }
    return true;
  }),
];
