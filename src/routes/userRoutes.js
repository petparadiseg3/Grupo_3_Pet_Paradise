const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { body } = require("express-validator");

//Como podemos indicar para subir el archivo nombre y donde guardarlo
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../../public/images-back/usuarios"));
  },
  filename: function (req, file, cb) {
    cb(null, "user-" + Date.now() + path.extname(file.originalname));
  },
});

const validations = [
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
    .normalizeEmail()
    .notEmpty()
    .withMessage("Tienes que escribir un email")
    .bail()
    .isEmail()
    .withMessage("Debes escribir un formato de correo válido"),
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

const upload = multer({ storage });
// Formulario de registro
router.get("/register", userController.register);
router.post(
  "/create",
  upload.single("picture_user"),
  validations,
  userController.processRegister
);

router.get("/login", userController.showLogin);

module.exports = router;
