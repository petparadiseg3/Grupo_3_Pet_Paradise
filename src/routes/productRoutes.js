const express = require("express");
//const productController = require("../controllers/controllerProducto");
const controller = require("../controllers/productControllerDb");
const router = express.Router();
const path = require("path");

const uploadProductPicture = require("../middlewares/uploadPictureProduct");

//Como podemos indicar para subir el archivo nombre y donde guardarlo


router.get("/", controller.listado);
/* router.get("/createbrand", controller.marca);
router.post(
  "/createbrand",
  uploadBrandPicture.single("picture_brand"),
  controller.crearMarca
  ); */
  router.get("/create", controller.crear);
  router.post(
  "/create",
  uploadProductPicture.single("image"),
  controller.guardado
);

router.get("/:id", controller.detalle);
router.get("/:id/edit", controller.editar);
//router.put("/:id/edit", uploadProductPicture.single("image"), controller.actualizar);
router.delete("/:id/delete", controller.borrar);

// router.get("/", productController.getProductId);

module.exports = router;
