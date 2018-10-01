var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index", {
    });
  });

  // Load all users
  app.get("/users", function(req, res) {
    db.User.findAll({}).then(function(results) {
      res.render("user", {
        newUser: results
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
