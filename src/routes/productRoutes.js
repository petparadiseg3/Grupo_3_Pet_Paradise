const express = require("express");
//const productController = require("../controllers/controllerProducto");
const controller =require("../controllers/productControllerDb")
const router = express.Router();
const multer = require("multer");
const path = require("path");

//Como podemos indicar para subir el archivo nombre y donde guardarlo
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../../public/images/product"));
  },
  filename: function (req, file, cb) {
    cb(null, "producto-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.get("/", controller.listado); 
router.get("/create", controller.crear);
router.post( "/create", upload.single("image"), controller.guardado);
router.get("/:id", controller.detalle);
router.get("/:id/edit", controller.editar);
router.put(  "/:id/edit", upload.single("image"), controller.actualizar);
router.delete("/:id/delete", controller.borrar);

// router.get("/", productController.getProductId);


module.exports = router;
