const express = require("express");
const indexController = require("../controllers/indexController");
const productController = require("../controllers/controllerProducto")
const router = express.Router();

router.get("/", indexController.index);

router.get("/cart", indexController.cart);

router.get("/register", indexController.register);

router.get("/login", indexController.login)

router.get("/admin", productController.administrador)


router.get("/productDetail", indexController.productDetail1)

// router.get("/productDetail/2", indexController.productDetail2)

module.exports = router;