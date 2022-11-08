const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Pot = sequelize.define("pot", {
    name: {
      type: DataTypes.STRING,
      required: true,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    details: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
    photo: {
      type: DataTypes.STRING,
    },
    postedBy: {
      type: DataTypes.STRING,
    },
  });

  Pot.associate = (models) => {
    Pot.hasOne(models.user);
  };

  return Pot;
};
