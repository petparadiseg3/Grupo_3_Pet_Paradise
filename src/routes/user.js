const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const multer = require("multer");
const path = require("path");

//Como podemos indicar para subir el archivo nombre y donde guardarlo
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../../public/images-back/usuarios"));
  }, //"../../public/images/users" Este es la ruta que habia creado Juan- (borrar despues)
  filename: function (req, file, cb) {
    cb(null, "user-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });
// Formulario de registro
router.get("/register", userController.showRegister);
router.post("/create", upload.single("picture_user"),userController.createUser);


router.get("/login", userController.showLogin)

module.exports = router;

