const express = require("express");
require("dotenv").config();
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

// config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// config static file
app.use(express.static(path.join(__dirname, "public")));

// khai bao route
app.get("/", (req, res) => {
    res.render("sampple.ejs");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
