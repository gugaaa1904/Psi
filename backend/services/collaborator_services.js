const { query } = require('express');
const connection = require('./db');
const utils = require('./utils');

//Get all Collaborators
async function collaborator_list(res) {
  let selectQuery = "SELECT * FROM Collaborator";
  connection.query(selectQuery, function (err, result, fields) {
    if (err) throw err;
    console.log(JSON.stringify(result));
    res.send(JSON.stringify(result));
  });
}

// Get a single Collaborator
async function get_collaborator(req, res) {

  //if (isNaN(Number([req.params.id]))) {
    //return res.status(400).json({ err: "Numbers only, please!" });
    //}
    
  let selectQuery = "SELECT * FROM Collaborator WHERE id = ?";
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

// Create a Collaborator.
async function create_collaborator(req, res, next) {
  var params = [
    req.body.companyid,
    req.body.name,
    req.body.companyname,
    req.body.email,
    req.body.phone,
    req.body.age,
    req.body.gender,
    req.body.password,
    req.body.address,
    req.body.plafond,
    req.body.tariff,
    req.body.end_date,
    req.body.start_date,
  ];
  if (!utils.validate_input(params))
    return res
      .status(400)
      .json({ err: "Invalid input! (Only numbers, letters and space)" });
  var selectQuery =
    "INSERT INTO `Collaborator` (`COMPANY_ID`, `NAME`, `COMPANYNAME`, `EMAIL`, `PHONE`, `AGE`, `GENDER`, `PASSWORD`, `ADDRESS`, `PLAFOND`, `TARIFF`, `END_DATE`, `START_DATE`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  connection.query(selectQuery, params, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
};

module.exports = {
  collaborator_list,
  create_collaborator,
  get_collaborator
};