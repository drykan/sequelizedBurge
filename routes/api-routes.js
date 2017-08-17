// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  app.get("/", function (req, res) {
    db.Burger.findAll({}).then(function (dbBurger) {
      var hbsObject = {
        burgers: dbBurger
      };
      res.render("index", hbsObject);
      res.json(dbBurger)
    });
  });

  app.post("/", function (req, res) {
    db.Burger.create({
      burger_name: req.body.name
    }).then(function (dbBurger) {
      res.json(dbBurger);
    });
  });

  // PUT route for updating posts
  app.post("/:id", function (req, res) {
    db.Burger.update({
      'devoured': true
    }, {
        where: {
          id: req.params.id
        }
      }).then(function (dbBurger) {
        res.json(dbBurger);
      });

  });
};