const DataTypes = require("sequelize");
const db = require("../db");

const UserCalendar = db.define("UserCalendar", {
  status: {
    type: DataTypes.STRING,
    defaultValue: "active",
  },
});

module.exports = UserCalendar;
