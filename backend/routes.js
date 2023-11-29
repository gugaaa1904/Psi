var express = require("express");
var router = express.Router();

// Require our controllers.
var company = require("./services/company_services");
var admin = require("./services/admin_services");
var collaborator = require("./services/collaborator_services");
var consuming = require("./services/consuming_services");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
  console.log("picha");
});

//GET request for a admin
router.get("/admin/:id", (req, res) => {
  admin.get_admin(req, res);
});

// POST request for creating a admin
router.post("/admin", admin.create_admin);
//---------------------------------------------------------

// GET request for list of collaborators
router.get("/collaborator", (req, res) => {
  collaborator.collaborator_list(res);
});


//GET request for a collaborator
router.get("/collaborator/:id", (req, res) => {
  collaborator.get_collaborator(req, res);
});

// POST request for creating a collaborator
router.post("/collaborator", collaborator.create_collaborator);
//---------------------------------------------------------


// GET request for list of companies
router.get("/company", (req, res) => {
  company.company_list(res);
});

//GET request for a company
router.get("/company/:id", (req, res) => {
  company.get_company(req, res);
});

// POST request for creating a company
router.post("/company", company.create_company);
//--------------------------------------------------------


// GET request for list of consuming
router.get("/consuming", (req, res) => {
  consuming.consuming_list(res);
});

//GET request for a consuming
router.get("/rate/:id", (req, res) => {
  consuming.get_consuming(req, res);
});
//--------------------------------------------------------

module.exports = router;
