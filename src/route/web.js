const express = require("express");
const router = express.Router();
const {
    index,
    hoidi,
    home,
    addNewUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    getDeleteUser,
    postDeleteUser,
} = require("../controller/homeController");

// khai bao route
router.get("/hoidi", hoidi);
router.get("/index", index);

router.get("/", home);
router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);
router.post("/create-user", addNewUser);
router.post("/update-user", postUpdateUser);
router.post("/delete/:id", getDeleteUser);
router.post("/delete-user", postDeleteUser);

module.exports = router;
