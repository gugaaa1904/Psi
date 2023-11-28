const express = require("express");
const connection = require("./db");
const utils = require("./utils");

//Get all Companies
async function company_list(res) {
  let selectQuery = "SELECT * FROM Company";
  connection.query(selectQuery, function (err, result, fields) {
    if (err) throw err;
    console.log(JSON.stringify(result));
    res.send(JSON.stringify(result));
  });
}

// Create a Company.
async function create_company(req, res, next) {
  var params = [
    req.body.name,
    req.body.address,
    req.body.telephone,
    req.body.email,
    req.body.funcs,
    req.body.cnpj,
  ];

  if (!utils.validate_input(params))
    return res
      .status(400)
      .json({ err: "Invalid input! (Only numbers, letters and space)" });

  var insertQuery =
    "INSERT INTO `company` (`NAME`, `ADDRESS`, `PHONE`, `EMAIL`, `NUMBER_EMPLOYEES`, `CNPJ`) VALUES (?, ?, ?, ?, ?, ?)";

  connection.query(insertQuery, params, function (err, result, fields) {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    console.log(result);
    res.status(201).json({ message: "Company created successfully" });
  });
}

module.exports = {
  company_list,
  create_company
};
