const express = require("express");
const routerApi = express.Router();
//
const {
    getUsersAPI,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteUserAPI,
    postUploadSingleFileAPI,
    postUploadmultiFileAPI,
} = require("../controller/apiController");
//
const {
    postCreateCustomerAPI,
    postCreateArrayCustomer,
} = require("../controller/customerController");
//
routerApi.get("/users", getUsersAPI);
routerApi.post("/users", postCreateUserAPI);
routerApi.put("/users", putUpdateUserAPI);
routerApi.delete("/users", deleteUserAPI);

//
routerApi.post("/file", postUploadSingleFileAPI);
routerApi.post("/files", postUploadmultiFileAPI);

//  custom route
routerApi.post("/customers", postCreateCustomerAPI);
routerApi.post("/customers-many", postCreateArrayCustomer);

//
routerApi.get("/", (req, res) => {
    res.send("Hello ssWorld");
});
module.exports = routerApi;
