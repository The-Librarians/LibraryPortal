var db = require("../models");

//Routes
module.exports = function(app) {
  // Get all media
  app.get("/api/media", function(req, res) {
    db.Media.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  //Search by Title
  app.get("api/media/title/:title", function(req,res){
    db.Media.findAll({
      where:{
        title:req.params.title
      }
    }).then(function(results){
      res.json(results);
    });
  });

  //Search by Author
  app.get("api/media/author/:author", function(req,res){
    db.Media.findAll({
      where:{
        author:req.params.author
      }
    }).then(function(results){
      res.json(results);
    });
  });

  //Search by Genre
  app.get("api/media/genre/:genre", function(req,res){
    db.Media.findAll({
      where:{
        genre:req.params.genre
      }
    }).then(function(results){
      res.json(results);
    });
  });
  
  //Search by Audience
  app.get("api/media/audience/:audience", function(req,res){
    db.Media.findAll({
      where:{
        audience:req.params.audience
      }
    }).then(function(results){
      res.json(results);
    });
  });

  // Create new media
  app.post("/api/media", function(req, res) {
    db.Media.create({
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      genre: req.body.genre,
      audience: req.body.audience
    }).then(function(results) {
      res.json(results);
    });
  });

  //Update media
  app.put("/api/books", function(req, res) {
    db.Media.update(
      {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        audience: req.body.audience
      },
      {
        where: {
          id: req.body.id
        }
      }
    ).then(function(book) {
      res.json(book);
    });
  });

  // Delete media
  app.delete("/api/books/:id", function(req, res) {
    db.Media.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(books) {
      res.json(books);
    });
  });
};
