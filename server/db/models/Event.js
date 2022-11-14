const Sequelize = require("sequelize");
const db = require("../db");

const Event = db.define("event", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  address: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  image: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  date: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  time: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tag: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  borough: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  eventLink: {
    type: Sequelize.STRING,
  },
  status: {
    type: Sequelize.ENUM("approved", "pending", "denied"),
    defaultValue: "pending",
  },
  longitude: {
    type: Sequelize.STRING,
  },
  latitude: {
    type: Sequelize.STRING,
  },
});

module.exports = Event;
