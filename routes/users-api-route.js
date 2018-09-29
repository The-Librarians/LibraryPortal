var db = require("../models");

module.exports = function(app) {
  // Get Patrons
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Create a new user
  app.post("/api/users", function(req, res) {
    db.User.create({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      cardNumber: req.body.cardNumber,
      password: req.body.password
    }).then(function(results) {
      res.json(results);
    });
  });

  //Update a user
  app.put("/api/users", function(req, res) {
    db.User.update(
      {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        cardNumber: req.body.cardNumber,
        password: req.body.password
      },
      {
        where: {
          id: req.body.id
        }
      }
    ).then(function(results) {
      res.json(results);
    });
  });
  
  // Delete User
  app.delete("/api/users/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(results) {
      res.json(results);
    });
  });
};
