require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const configViewEngine = require("./config/viewEngine");
const webRoute = require("./route/web");
// Get the client
const connection = require("./config/database");
configViewEngine(app);

app.use("/test123", webRoute);

// A simple SELECT query
connection.query("SELECT * FROM Users;", function (err, results, fields) {
    console.log(">>>>results", results); // results contains rows returned by server
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
