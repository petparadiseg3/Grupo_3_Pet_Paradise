const express = require("express");
const router = express.Router();
const path = require("path");

const adopcionController = require("../controllers/adopcionController");

router.get("/adopciones", adopcionController.adopcion);

module.exports = router;
