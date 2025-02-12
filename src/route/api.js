const express = require("express");
const routerApi = express.Router();
const {
    getUsersAPI,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteUserAPI,
    postUploadSingleFileAPI,
    postUploadmultiFileAPI,
} = require("../controller/apiController");
routerApi.get("/users", getUsersAPI);
routerApi.post("/users", postCreateUserAPI);
routerApi.put("/users", putUpdateUserAPI);
routerApi.delete("/users", deleteUserAPI);
routerApi.post("/file", postUploadSingleFileAPI);
routerApi.post("/files", postUploadmultiFileAPI);
routerApi.get("/", (req, res) => {
    res.send("Hello ssWorld");
});
module.exports = routerApi;
