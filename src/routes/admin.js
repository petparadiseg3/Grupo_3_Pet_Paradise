const express = require("express");
const productController = require("../controllers/controllerProducto")
const router = express.Router();
const multer = require('multer');
const path = require('path');

//Como podemos indicar para subir el archivo nombre y donde guardarlo
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/images/product'))
    },
    filename: function (req, file, cb) {
      cb(null, 'producto-'+Date.now()+path.extname(file.originalname))
    }
  })
   
  const upload = multer({ storage })

router.get("/products", productController.allProductos)
router.get("/products/create", productController.create)
router.post("/products/create", upload.single('picture_product') ,productController.postProduct)
router.get("/products/:id", productController.getProductId)

router.get("/products/:id/edit", productController.editProductId)
router.put("/products/:id/edit", upload.single('picture_product'),productController.updateProduct )
router.delete("products/:id/delete", productController.deleteProduct)

router.get("/admin", productController.administrador)





module.exports = router;