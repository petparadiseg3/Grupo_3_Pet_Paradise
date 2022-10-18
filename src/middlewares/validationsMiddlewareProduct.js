const { body } = require("express-validator");
const path = require("path");

module.exports = [
    body("name")
        .notEmpty().withMessage("Tienes que escribir un nombre")
        .bail()
        .isLength({ min: 5 }).withMessage(" tener aDebel menos 5 caracteres de largo"),

    body("brand")
        .notEmpty().withMessage("Tienes que seleccionar una marca"),

    body("category")
        .notEmpty().withMessage("Tienes que seleccionar una categoria"),

    body("descriptions")
        .notEmpty().withMessage("Tienes que escribir una descripción")
        .bail()
        .isLength({ min: 20 }).withMessage(" tener aDebel menos 20 caracteres de largo"),
    body("image").custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = [".jpg", ".png", ".gif",".jpeg"];
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

