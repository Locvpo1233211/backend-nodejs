const connection = require("../config/database");

async function getAllUsers() {
    let [results, fields] = await connection.query("SELECT * FROM Users;");
    return results;
}

const getUserById = async (id) => {
    let [results, fields] = await connection.query(
        `SELECT * FROM Users WHERE id = ${id};`
    );

    let user = results && results.length > 0 ? results[0] : {};
    return user;
};

module.exports = { getAllUsers, getUserById };
