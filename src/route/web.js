const express = require("express");
const router = express.Router();
const {
    index,
    hoidi,
    home,
    addNewUser,
    getCreatePage,
    getUpdatePage,
} = require("../controller/homeController");

// khai bao route
router.get("/hoidi", hoidi);
router.get("/index", index);

router.get("/", home);
router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);
router.post("/create-user", addNewUser);

module.exports = router;
