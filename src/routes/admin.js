const express = require("express");
const productController = require("../controllers/controllerProducto")
const router = express.Router();


router.get("/products", productController.allProductos)
router.get("/products/create", productController.create)
router.get("/products/:id", productController.getProductId)
router.post("/products",productController.postProduct)

//  router.get("/products/:id/edit", productController.vistaParaEditarProducto)
//  router.put("/products/:id", productController.accionparamodificardatos )
//  router.delete("products/id", productController.borrarDatos)

router.get("/admin", productController.administrador)





module.exports = router;