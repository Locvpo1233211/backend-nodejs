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
    deleteAarrayCustomerAPI,
    xxxxx,
} = require("../controller/customerController");
const {
    postCreateProjectAPI,
    getAllProjectAPI,
    updateProjectAPI,
    deleteAProjectAPI,
} = require("../controller/projectController");
const {
    postCreateTasksAPI,
    getAllTaskAPI,
    deleteTaskAPI,
    updateTaskAPI,
} = require("../controller/taskController");
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
routerApi.delete("/customers-many", deleteAarrayCustomerAPI);
routerApi.delete("/all-customers", xxxxx);

// project route

routerApi.post("/projects", postCreateProjectAPI);
routerApi.get("/projects", getAllProjectAPI);
routerApi.delete("/projects", deleteAProjectAPI);
routerApi.put("/projects", updateProjectAPI);

// TAsKS route

routerApi.post("/tasks", postCreateTasksAPI);
routerApi.get("/tasks", getAllTaskAPI);
routerApi.delete("/tasks", deleteTaskAPI);
routerApi.put("/tasks", updateTaskAPI);

//
http: routerApi.get("/", (req, res) => {
    res.send("Hello ssWorld");
});
module.exports = routerApi;
