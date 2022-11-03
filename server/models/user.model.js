const { DataTypes } = require("sequelize");
const { Pot } = require("./pot.model");

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    name: {
      type: DataTypes.STRING,
    },
    googleId: {
      type: DataTypes.STRING,
      required: true,
    },
    email: {
      type: DataTypes.STRING,
    },
    avatar: {
      type: DataTypes.STRING,
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Pot);
  };

  return User;
};
