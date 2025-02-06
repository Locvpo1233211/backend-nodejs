const connection = require("../config/database");

async function getAllUsers() {
    let [results, fields] = await connection.query("SELECT * FROM Users;");
    return results;
}

module.exports = { getAllUsers };
