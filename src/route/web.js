const express = require("express");
const router = express.Router();

// khai bao route
router.get("/hoidi", (req, res) => {
    res.render("sampple.ejs");
});

module.exports = router;
