const express = require("express");
const router = express.Router();
const adopcionController = require("../controllers/adopcionController");

router.get("/", adopcionController.adopcion);

module.exports = router;
