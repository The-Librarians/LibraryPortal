// Create media table
module.exports = function(sequelize, DataTypes) {
  var Media = sequelize.define("Media", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 150]
      }
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 150]
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 250]
      }
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 150]
      }
    },
    audience: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 150]
      }
    }
  });
  return Media;
};
