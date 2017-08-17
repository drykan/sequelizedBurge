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

  // GET route for getting all of the posts
  app.get("/api/burgers", function (req, res) {
    // Add sequelize code to find all posts, and return them to the user with res.json
    db.Burger.findAll({}).then(function (dbBurger) {
      res.json(dbBurger);
    });
  });

  // Get route for returning posts of a specific category
  app.get("/api/burgers/category/:category", function (req, res) {
    // Add sequelize code to find all posts where the category is equal to req.params.category,
    // return the result to the user with res.json
    db.Burger.findAll({
      where: {
        category: req.body.category
      }
    }).then(function (dbBurger) {
      res.json(dbBurger);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/burgers/:id", function (req, res) {
    // Add sequelize code to find a single post where the id is equal to req.params.id,
    // return the result to the user with res.json
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbBurger) {
        res.json(dbBurger);
      });
  });

  // POST route for saving a new post
  app.post("/api/burgers", function (req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
    db.Burger.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    }).then(function (dbBurger) {
      res.json(dbBurger);
    })
      .catch(function (err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  // DELETE route for deleting posts
  app.delete("/api/burgers/:id", function (req, res) {
    // Add sequelize code to delete a post where the id is equal to req.params.id, 
    // then return the result to the user using res.json
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbBurger) {
      res.json(dbBurger);
    });
  });

  // PUT route for updating posts
  app.put("/api/burgers", function (req, res) {
    // Add code here to update a post using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
    db.Burger.update({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    }, {
        where: {
          id: req.body.id
        }
      }).then(function (dbBurger) {
        res.json(dbBurger);
      })
      .catch(function (err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });
};
