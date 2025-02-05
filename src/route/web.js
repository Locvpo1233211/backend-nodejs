const express = require("express");
const router = express.Router();
const {
    index,
    hoidi,
    home,
    addNewUser,
} = require("../controller/homeController");

// khai bao route
router.get("/hoidi", hoidi);
router.get("/index", index);

router.get("/", home);
router.post("/create-user", addNewUser);

module.exports = router;
