const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const multer = require("multer");
const path = require("path");

//Como podemos indicar para subir el archivo nombre y donde guardarlo
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../../public/images/users"));
  },
  filename: function (req, file, cb) {
    cb(null, "user-" + Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

router.get("/register", userController.register);

router.get("/login", userController.login)

module.exports = router;

