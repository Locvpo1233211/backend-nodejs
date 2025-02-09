require("dotenv").config();
const mysql = require("mysql2/promise");
const mongoose = require("mongoose");

// // Create the connection to database
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST || "localhost",
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER || "root",
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
// });

// Create the connection pool. The pool-specific settings are the defaults
// const connection = mysql.createPool({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     waitForConnections: true,
//     connectionLimit: 10,
//     maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
//     idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
//     queueLimit: 0,
//     enableKeepAlive: true,
//     keepAliveInitialDelay: 0,
// });

// // Connect to the database
const dbState = [
    {
        value: 0,
        label: "disconnected",
    },
    {
        value: 1,
        label: "connected",
    },
    {
        value: 2,
        label: "connecting",
    },
    {
        value: 3,
        label: "disconnecting",
    },
];

const connection = async () => {
    try {
        await mongoose.connect("mongodb://root:123456@localhost:27017");
        console.log("Connect to MongoDB successfully");
        const state = Number(mongoose.connection.readyState);
        console.log(dbState.find((f) => f.value == state).label, "to db"); // connected to db
    } catch (error) {
        console.log("Connect to MongoDB failure");
    }
};

module.exports = connection;
