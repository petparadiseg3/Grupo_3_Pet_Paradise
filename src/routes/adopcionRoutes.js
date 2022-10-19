const express = require("express");
const router = express.Router();
const adopcionController = require("../controllers/adopcionController");

// const multer = require("multer");
// const storage = multer.diskStorage({ destination: function (req, file, cb) { cb(null, "../databaseJson/addPet.json") });


router.get("/", adopcionController.adopcion);
router.get("/perros", adopcionController.adopcionPerros);
router.get("/gatos", adopcionController.adopcionGatos);
router.get("/otrosAnimales", adopcionController.adopcionOtrosAnimales);
router.get("/addpet", adopcionController.adopcionAddPet); 
router.get("/detailPet", adopcionController.adopcionDetailPet); // pet/create
router.post("/addpet/save", adopcionController.adopcionSavePet);

module.exports = router;
