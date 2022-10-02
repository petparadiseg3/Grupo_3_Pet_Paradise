const express = require("express");
const router = express.Router();
const adopcionController = require("../controllers/adopcionController");

router.get("/", adopcionController.adopcion);
router.get("/perros", adopcionController.adopcionPerros);

module.exports = router;
