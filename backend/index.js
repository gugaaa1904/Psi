const express = require("express");

const app = express();
var routes = require("./routes");
const mysql = require('mysql2');

const cors = require("cors");
app.use(cors());
const PORT = 80;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).send("Not found");
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
});

//connection.end();
module.exports = app;
