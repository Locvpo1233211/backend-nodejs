const { json } = require("express");
const connection = require("../config/database");
const {
    getAllUsers,
    getUserById,
    updateUserById,
} = require("../service/CRUDService");
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

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES ('${email}', '${name}', '${city}');`
    );
    res.send("Add new user successfully");
};

const postUpdateUser = async (req, res) => {
    let { email, name, id, city } = req.body;
    let [results, fields] = await connection.query(
        `UPDATE Users SET email = '${email}', name = '${name}', city = '${city}' WHERE id = ${id};`
    );

    await updateUserById(id, email, name, city);
    res.redirect("/");
};

module.exports = {
    hoidi,
    index,
    home,
    addNewUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
};
