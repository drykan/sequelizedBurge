var express = require('express');
var router = express.Router();
var db = require("../models");
// var burger = require('../models/burger.js');

router.get('/', function (req, res) {
  db.Burger.findAll({}).then(function (data) {
    res.render("index", {
      burger: data
    });
  });
});

router.post("/burgers", function (req, res) {
  db.Burger.create({
    burger_name: req.body.name,
    devoured: false
  }).then(function (data) {
    res.redirect("/");
  });
});

router.put("/burgers/:id", function (req, res) {
  db.Burger.update(
    {
      devoured: req.body.devoured
    },
    {
      where: { id: req.params.id }
    }).then(function (data) {
      res.redirect("/");
    });
});


// Export routes for server.js to use.
module.exports = router;