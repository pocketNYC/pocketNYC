const DataTypes = require("sequelize");
const db = require("../db");

const Favorite_Resource = db.define("Favorite_Resource", {
  status: {
    type: DataTypes.STRING,
    defaultValue: "active",
  },
});

module.exports = Favorite_Resource;
