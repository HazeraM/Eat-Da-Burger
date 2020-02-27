var mysql = require("mysql");

// to protect the key from github
require("dotenv").config();

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
});

// Export connection for our ORM to use.
module.exports = connection; 