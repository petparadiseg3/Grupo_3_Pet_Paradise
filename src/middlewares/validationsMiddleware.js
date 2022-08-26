const { body } = require("express-validator");
const path = require("path");

module.exports = [
    body("name")
        .trim()
        .escape()
        .notEmpty()
        .withMessage("Tienes que escribir un nombre"),
    body("surname")
        .trim()
        .escape()
        .notEmpty()
        .withMessage("Tienes que escribir tu apellido"),
    body("email")
        .notEmpty().withMessage("Tienes que escribir un email")
        .bail()
        .isEmail().withMessage("Debes escribir un formato de correo válido"),
    body("tel")
        .trim()
        .escape()
        .notEmpty()
        .withMessage("Tienes que escribir un telefono"),
    body("password")
        .trim()
        .escape()
        .notEmpty()
        .withMessage("Tienes que escribir una contraseña"),
    body("picture_user").custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = [".jpg", ".png", ".gif"];
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

