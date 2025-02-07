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
const updateUserById = async (id, email, name, city) => {
    let [results, fields] = await connection.query(
        `UPDATE Users SET email = '${email}', name = '${name}', city = '${city}' WHERE id = ${id};`
    );
};

module.exports = { getAllUsers, getUserById, updateUserById };
