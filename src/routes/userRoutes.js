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
router.post("/create", uploadProfileFile.single("picture_user"), validations, userController.processRegister);

//? Formulario de login
router.get("/login", userController.showLogin);

module.exports = router;
