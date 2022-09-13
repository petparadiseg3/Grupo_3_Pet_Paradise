const express = require("express");
const brandController = require("../controllers/brandController");
const router = express.Router();
const uploadBrandPicture = require("../middlewares/uploadPictureBrand");

router.get("/create", brandController.marca);
router.post(
  "/create",
  uploadBrandPicture.single("picture_brand"),
  brandController.crearMarca
);
router.get("/", brandController.todasLasMarcas);
/* router.get("/buscar", brandController.buscarPorMarca);
 */

module.exports = router;
