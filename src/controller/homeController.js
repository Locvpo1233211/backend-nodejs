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

const addNewUser = (req, res) => {
    console.log(">>>>req", req.body);
    let { email, name, city } = req.body;
    console.log(">>>>email", email, ">>>>name", name, ">>>>city", city);
    connection.query(
        `INSERT INTO Users (email, name, city) VALUES ('${email}', '${name}', '${city}');`,
        function (err, results, fields) {
            if (err) {
                console.log(">>>>err", err);
                res.send("Add new user failed");
            } else {
                console.log(">>>>results", results);
                res.send("Add new user successfully");
            }
        }
    );
};

module.exports = { hoidi, index, home, addNewUser };
