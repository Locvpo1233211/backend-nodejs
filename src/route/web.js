const express = require("express");
const router = express.Router();
const { index, hoidi } = require("../controller/homeController");

// khai bao route
router.get("/hoidi", hoidi);

router.get("/index", index);

module.exports = router;
