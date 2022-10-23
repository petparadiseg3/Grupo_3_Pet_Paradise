const express = require("express");
const router = express.Router();

const apiController = require("../controllers/apiController");

router.get("/users", apiController.allUsers);
router.get("/users/:id", apiController.userDetail);


module.exports = router;
