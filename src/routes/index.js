const express = require("express");
const indexController = require("../controllers/indexController");
const router = express.Router();

router.get("/", indexController.index);

router.get("/cart", indexController.cart);

router.get("/register",indexController.register);

router.get("/login", indexController.login)

router.get("/productos", indexController.productos)

module.exports=router;