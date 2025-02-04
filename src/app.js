const express = require("express");
const app = express();
require("dotenv").config();

const port = 3000;
const path = require("path");

console.log(process.env.HOST_NAME);

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("sampple.ejs");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
