const DataTypes = require("sequelize");
const db = require("../db");

const Resource = db.define("resources", {
  name: {
    type: DataTypes.STRING,
    unique: true,
    // allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    // allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    defaultValue: "https://i.imgur.com/B21NIzo.png",
  },
  address: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
  borough: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    // allowNull: false,
  },
  tag: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    // allowNull: false,
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
