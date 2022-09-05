const express = require("express");
const router = express.Router();
const path = require("path");

//? Controller
const controllerUser = require("../controllers/controllerUser");

//? Middlewares
const uploadProfileFile = require('../middlewares/multerMiddleware');
const validations = require("../middlewares/validationsMiddleware")
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware")


//? Formulario de registro
router.get("/register", guestMiddleware, controllerUser.viewRegister);

//? Procesar el registro
router.post("/register", uploadProfileFile.single("picture_user"), validations, controllerUser.createUser);

//? Formulario de login
router.get("/login", guestMiddleware, controllerUser.login);

//? Procesar el login
router.post("/login", controllerUser.loginProcess);

//? Perfil de usuario
router.get("/profile", authMiddleware, controllerUser.profile);

//? Perfil de usuario
router.get("/logout",  controllerUser.logout);

module.exports = router;
