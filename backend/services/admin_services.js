const { query } = require('express');
const connection = require('./db');
const utils = require('./utils');

// Get a single client
async function get_admin(req, res) {

  //if (isNaN(Number([req.params.id]))) {
    //return res.status(400).json({ err: "Numbers only, please!" });
    //}
    
  let selectQuery = "SELECT * FROM Admin WHERE id = ?";
  connection.query(
    selectQuery,
    [req.params.id],
    function (err, result, fields) {
      if (err) throw err;
      console.log(JSON.stringify(result));
      res.send(JSON.stringify(result));
    }
  );
}

// Create a Client.
async function create_admin(req, res, next) {
  var params = [
    req.body.companyid,
    req.body.name,
    req.body.email,
    req.body.phone,
    req.body.age,
    req.body.gender,
    req.body.password,
    req.body.companyname,
    req.body.address,
  ];
  if (!utils.validate_input(params))
    return res
      .status(400)
      .json({ err: "Invalid input! (Only numbers, letters and space)" });
  var selectQuery =
    "INSERT INTO `Admin` (`COMPANY_ID`, `NAME`, `EMAIL`, `PHONE`, `AGE`, `GENDER`, `PASSWORD`, `COMPANYNAME`, `ADDRESS`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

  connection.query(selectQuery, params, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
};

module.exports = {
  get_admin,
  create_admin,
};
