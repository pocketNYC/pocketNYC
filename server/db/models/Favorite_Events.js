const DataTypes = require("sequelize");
const db = require("../db");

const Favorite_Events = db.define("Favorite_Events", {
  status: {
    type: DataTypes.STRING,
    defaultValue: "active",
  },
});

module.exports = Favorite_Events;
