const express = require("express");
const productController = require("../controllers/controllerProducto")
const router = express.Router();


router.get("/administrar", productController.allProductos)
router.get("/administrar/crear", productController.create)
router.get("/admin", productController.administrador)
/* router.get("/admin", productController.administrador) */
router.get("/administrar/:id", productController.getProductId)





module.exports = router;