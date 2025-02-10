const { json } = require("express");
const connection = require("../config/database");
const {
    getAllUsers,
    getUserById,
    updateUserById,
} = require("../service/CRUDService");

const User = require("../model/user");
const { get } = require("mongoose");
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
    let results = await User.find({});
    console.log(">>>>results", results);
    res.render("home.ejs", { listUsers: results });
};
const getCreatePage = (req, res) => {
    res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
    let userId = req.params.id;
    let user = await User.findById(userId);
    res.render("edit.ejs", { userEdit: user });
};

const addNewUser = async (req, res) => {
    console.log(">>>>req", req.body);
    let { email, name, city } = req.body;
    User.create({ email, name, city });
    res.send("Add new user successfully");
};

const postUpdateUser = async (req, res) => {
    let { email, name, id, city } = req.body;
    // let [results, fields] = await connection.query(
    //     `UPDATE Users SET email = '${email}', name = '${name}', city = '${city}' WHERE id = ${id};`
    // );

    // await updateUserById(id, email, name, city);
    await User.updateOne({ _id: id }, { email, name, city });
    res.redirect("/");
};
const getDeleteUser = async (req, res) => {
    let userId = req.params.id;
    let user = await User.findById(userId);

    res.render("delete.ejs", { user });
};
const postDeleteUser = async (req, res) => {
    let userId = req.body.id;
    await User.deleteOne({ _id: userId });
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
    getDeleteUser,
    postDeleteUser,
};
