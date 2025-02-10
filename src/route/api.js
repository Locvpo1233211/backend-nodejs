const express = require("express");
const routerApi = express.Router();
const { getUsersAPI } = require("../controller/apiController");
routerApi.get("/users", getUsersAPI);
routerApi.get("/", (req, res) => {
    res.send("Hello ssWorld");
});
module.exports = routerApi;
