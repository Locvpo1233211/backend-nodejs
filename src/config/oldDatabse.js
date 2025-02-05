require("dotenv").config();
const mysql = require("mysql2");

// // Create the connection to database
const connection = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

module.exports = connection;
