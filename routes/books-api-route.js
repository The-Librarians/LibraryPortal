var db = require("../models");

module.exports = function(app) {
  // Get all books
  app.get("/api/books", function(req, res) {
    db.Books.findAll({}).then(function(book) {
      res.json(book);
    });
  });

  //Search by Title
  app.get("/api/books/title/:title", function(req, res) {
    db.Books.findAll({
      where: {
        title: req.params.title
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  // //Search by Author
  app.get("/api/books/author/:author", function(req, res) {
    db.Books.findAll({
      where: {
        author: req.params.author
      }
    }).then(function(results) {
      res.json(results);
    });
  });
  
  // //Search by Genre
  app.get("/api/books/genre/:genre", function(req, res) {
    db.Books.findAll({
      where: {
        genre: req.params.genre
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  

  // Create a new book
  app.post("/api/books", function(req, res) {
    db.Books.create({
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      genre: req.body.genre,
      audience: req.body.audience,
      isCheckedOut: req.body.isCheckedOut
    }).then(function(book) {
      res.json(book);
    });
  });

  //Update a book
  app.put("/api/books", function(req, res) {
    db.Books.update(
      {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        audience: req.body.audience,
        isCheckedOut:req.body.isCheckedOut
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

  // Delete a new book
  app.delete("/api/books/:id", function(req, res) {
    db.Books.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(books) {
      res.json(books);
    });
  });
};
