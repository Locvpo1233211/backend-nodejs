const { json } = require("express");
const connection = require("../config/database");

const hoidi = (req, res) => {
    res.render("sampple.ejs");
};

const index = (req, res) => {
    // A simple SELECT query
    let data = [];
    connection.query("SELECT * FROM Users;", function (err, results, fields) {
        data = results;
        console.log(">>>>results", results); // results contains rows returned by server
        res.send(JSON.stringify(data));
    });
};

const home = (req, res) => {
    res.render("home.ejs");
};

module.exports = { hoidi, index, home };
