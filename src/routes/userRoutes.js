const express = require("express");
const router = express.Router();
const path = require("path");

//? Controller
const userController = require("../controllers/userController");

//? Middlewares
const uploadProfileFile = require('../middlewares/multerMiddleware');
const validations = require("../middlewares/validationsMiddleware")
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware")


//? Formulario de registro
router.get("/register", guestMiddleware ,userController.register);

//? Procesar el registro
router.post("/register", uploadProfileFile.single("picture_user"), validations, userController.processRegister);

//? Formulario de login
router.get("/login", guestMiddleware, userController.login);

//? Procesar el login
router.post("/login", userController.loginProcess);

//? Perfil de usuario
router.get("/profile", authMiddleware, userController.profile);

//? Perfil de usuario
router.get("/logout",  userController.logout);

module.exports = router;
