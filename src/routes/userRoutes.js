const express = require("express");
const router = express.Router();
const path = require("path");

//? Controller
const userController = require("../controllers/userController");

//? Middlewares
const uploadProfileFile = require('../middlewares/multerMiddleware');
const validations = require("../middlewares/validationsMiddleware")

//? Formulario de registro
router.get("/register", userController.register);

//? Procesar el registro
router.post("/register", uploadProfileFile.single("picture_user"), validations, userController.processRegister);

//? Formulario de login
router.get("/login", userController.login);

//? Procesar el login
router.post("/login", userController.loginProcess);

module.exports = router;
