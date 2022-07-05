const express = require("express");
const indexController = require("../controllers/indexController");
const router = express.Router();

router.get("/", indexController.index);

router.get("/cart", indexController.cart);

router.get("/login",indexController.login);

module.exports=router;