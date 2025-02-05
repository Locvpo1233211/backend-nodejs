const connection = require("../config/database");

const hoidi = (req, res) => {
    res.render("sampple.ejs");
};

const index = (req, res) => {
    // A simple SELECT query

    connection.query("SELECT * FROM Users;", function (err, results, fields) {
        console.log(">>>>results", results); // results contains rows returned by server
    });

    res.send("indexlolo");
};

module.exports = { hoidi, index };
