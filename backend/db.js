const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "infocharge",
});

connection.connect(function (err) {
    if (err) {
        console.error("Database connection error:", err.stack);
        console.log(err.code);
        console.log(err.fatal);
        return;
    }  
    console.log("Connected to database"); 
});

module.exports = connection;
