const { json } = require("express");
const connection = require("../config/database");
const { getAllUsers, getUserById } = require("../service/CRUDService");
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

const home = async (req, res) => {
    let results = await getAllUsers();
    res.render("home.ejs", { listUsers: results });
};
const getCreatePage = (req, res) => {
    res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
    let userId = req.params.id;
    let user = await getUserById(userId);
    res.render("edit.ejs", { userEdit: user });
};

const addNewUser = async (req, res) => {
    console.log(">>>>req", req.body);
    let { email, name, city } = req.body;
    console.log(">>>>email", email, ">>>>name", name, ">>>>city", city);

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES ('${email}', '${name}', '${city}');`
    );
    console.log(">>>>results", results);
    res.send("Add new user successfully");
};

module.exports = {
    hoidi,
    index,
    home,
    addNewUser,
    getCreatePage,
    getUpdatePage,
};
