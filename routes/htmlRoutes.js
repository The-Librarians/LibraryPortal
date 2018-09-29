var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  //Load example page and pass in an example by id
  app.get("/users/id/:id", function(req, res) {
      db.User.findAll({}).then(function(results) {
        res.render(results);
      });
  });

//   // Render 404 page for any unmatched routes
//   app.get("*", function(req, res) {
//     res.render("404");
//   });
 };
