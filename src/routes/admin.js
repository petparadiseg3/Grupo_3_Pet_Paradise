const express = require("express");
//const productController = require("../controllers/controllerProducto");
const controller =require("../controllers/productsControllersDb")
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

router.get("/", controller.list); //allProductos
// router.get("/create", productController.create);
// router.post( "/create", upload.single("picture_product"), productController.postProduct);
router.get("/:id", controller.detail);
// router.get("/:id/edit", productController.editProductId);
// router.put(  "/:id/edit",  upload.single("picture_product"), productController.updateProduct);
// router.delete("/:id/delete", productController.deleteProduct);

// router.get("/", productController.getProductId);


module.exports = router;
