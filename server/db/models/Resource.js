const DataTypes = require("sequelize");
const db = require("../db");

const Resource = db.define("resources", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT
  },
  imageUrl: {
    type: DataTypes.STRING,
    defaultValue: "https://i.imgur.com/B21NIzo.png",
  },
  address: {
    type: DataTypes.STRING,
     allowNull: false,
  },
  borough: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  tag: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  hyperlink: {
    type: DataTypes.STRING,
  },
  latitude: {
    type: DataTypes.STRING,
  },
  longitude: {
    type: DataTypes.STRING,
  },
});

module.exports = Resource;
