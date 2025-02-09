require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const configViewEngine = require("./config/viewEngine");
const webRoute = require("./route/web");
// Get the client
const connection = require("./config/database");
const mongoose = require("mongoose");
const Kitten = require("./model/Kitten");

configViewEngine(app);
app.use("/", webRoute);

const cat = new Kitten({ name: "hoidan it2" });
cat.save();
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
