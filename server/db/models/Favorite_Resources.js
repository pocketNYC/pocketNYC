const DataTypes = require("sequelize");
const db = require("../db");

const Favorite_Resources = db.define("Favorite_Resources", {
  status: {
    type: DataTypes.STRING,
    defaultValue: "active",
  },
});

module.exports = Favorite_Resources;
