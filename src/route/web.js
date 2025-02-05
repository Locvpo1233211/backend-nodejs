const express = require("express");
const router = express.Router();
const { index, hoidi, home } = require("../controller/homeController");

// khai bao route
router.get("/hoidi", hoidi);
router.get("/index", index);

router.get("/", home);

module.exports = router;
