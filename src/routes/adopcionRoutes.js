const express = require("express");
const router = express.Router();
const adopcionController = require("../controllers/adopcionController");

router.get("/", adopcionController.adopcion);
router.get("/perros", adopcionController.adopcionPerros);
router.get("/gatos", adopcionController.adopcionGatos);
router.get("/otrosAnimales", adopcionController.adopcionOtrosAnimales);

module.exports = router;
