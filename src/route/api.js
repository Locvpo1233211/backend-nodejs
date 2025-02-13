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
    getAllCustomerAPI,
    updateCustomerAPI,
    deleteACustomerAPI,
} = require("../controller/customerController");
const { update } = require("../model/customer");
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
routerApi.get("/customers", getAllCustomerAPI);
routerApi.put("/customers", updateCustomerAPI);
routerApi.delete("/customers", deleteACustomerAPI);

//
routerApi.get("/", (req, res) => {
    res.send("Hello ssWorld");
});
module.exports = routerApi;
