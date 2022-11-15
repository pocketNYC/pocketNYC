const DataTypes = require("sequelize");
const db = require("../db");

const Favorite_Event = db.define("Favorite_Event", {
  status: {
    type: DataTypes.STRING,
    defaultValue: "active",
  },
});

module.exports = Favorite_Event;
