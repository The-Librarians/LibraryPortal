var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index", {
    });
  });

  //Load all users
  app.get("/users/:id", function(req, res) {
    db.User.findOne({
      where:{
        id: req.params.id
      }
    }).then(function(results) {
      res.render("patrons", {
        newUser: results
      });
    });
  });

  app.get("/books", function(req,res){
    res.render("librarian", {
      
    })
      
  })

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
