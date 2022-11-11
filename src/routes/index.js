const express = require("express");
const indexController = require("../controllers/indexController");
//const productController = require("../controllers/controllerProducto")
const controller = require("../controllers/administratorControllerDb")
const userRole = require("../middlewares/userRole")
const router = express.Router();

router.get("/", indexController.index);
router.get("/admin", controller.administrador)
//router.get("/admin", productController.administrador)

module.exports = router;