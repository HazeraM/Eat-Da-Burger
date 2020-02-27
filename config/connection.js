var mysql = require("mysql");

// to protect the key from github
require("dotenv").config();



// Export connection for our ORM to use.
module.exports = connection; 