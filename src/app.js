require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const configViewEngine = require("./config/viewEngine");
const fileUpload = require("express-fileupload");

const webRoute = require("./route/web");
const apiRoute = require("./route/api");
// config file upload
app.use(fileUpload());

// Get the client
const connection = require("./config/database");
const mongoose = require("mongoose");
// config view engine
configViewEngine(app);
// khai bao route
app.use("/", webRoute);
app.use("/v1/api", apiRoute);
(async () => {
    try {
        await connection();
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    } catch (error) {
        console.log("Connect to MongoDB failed");
    }
})();
