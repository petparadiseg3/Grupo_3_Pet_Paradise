const express = require("express");
const categoryController = require("../controllers/categoryController");
const router = express.Router();
const uploadCategoryPicture = require("../middlewares/uploadPictureCategory");

router.get("/create", categoryController.viewCreateCategoria);
router.post(
  "/create",
  uploadCategoryPicture.single("picture_category"),
  categoryController.postCreateCategoria
);
router.get("/", categoryController.todasLasMarcas);

module.exports = router;
