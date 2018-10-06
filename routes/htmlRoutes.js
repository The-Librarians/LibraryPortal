var db = require("../models");

module.exports = function(app) {

  // Load index page
  app.get("/", function(req, res) {
    db.Books.findAll({
      limit: 15
    }).then(function(results){
      res.render("index", {
        books:results
      });
      
    })
  });

  //Login Screen with cardNumber
  app.get("/users/:cardNumber", function(req, res) {
    console.log(req.params);
    db.User.findOne({
      where: {
        cardNumber: req.params.cardNumber
      }
    }).then(function(results) {
      res.render("patrons", {
        newUser: results
      });
    });
  });

  
  
//Route for Librarian
  app.get("/books/", function(req, res) {
    res.render("librarian", {});
  });

  
  //Route to show Recently Added list
  app.get("/books/title/:title/", function(req,res){
    db.Books.findAll({
      where:{
        title:req.params.title
      }
    }).then(function(results){
      res.render("patrons", {
        books: results
      });
    });
  });

  //Route for Items Out
  app.get("/users/itemsOut/", function(req,res){
    db.User.findAll({
      where: {
        itemsOut:req.params.itemsOut
      }
    }).then(function(results){
      res.render("patrons", {
        newUser:results
      });
    });
  });

  //Route for history
  app.get("/users/history/", function(req,res){
    db.User.findAll({
      where:{
        history:req.params.history
      }
    }).then(function(results){
      res.render("patrons", {
        books:results
      })
    })
  })
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
