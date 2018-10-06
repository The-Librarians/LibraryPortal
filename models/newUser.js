//Creating user table
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 15]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 150]
      }
    },
    cardNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true
      }
    },
    isChild:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    isAdult: {
      type:DataTypes.BOOLEAN,
      allowNull: false,
    },
    itemsOut:{
      type: DataTypes.STRING,
      allowNull: true,
      validate:{
        len: [1, 150]
      }
    },
    history:{
      type: DataTypes.STRING,
      allowNull: true,
      validate:{
        len: [1,150]
      }
    }
  });
  return User;
};
