require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const configViewEngine = require("./config/viewEngine");
const webRoute = require("./route/web");
// Get the client
const mysql = require("mysql2");
configViewEngine(app);

app.use("/test123", webRoute);

// Create the connection to database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "123456",
    database: "hoidanit",
});

// A simple SELECT query
connection.query("SELECT * FROM Users;", function (err, results, fields) {
    console.log(">>>>results", results); // results contains rows returned by server
    console.log(">>>>fields", fields); // fields contains extra meta data about results, if available
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
