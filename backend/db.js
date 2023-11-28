const mysql = require("infocharge");
const config = require("../config");
const connection = mysql.createConnection(config);

module.exports = connection;
