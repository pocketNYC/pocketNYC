const Sequelize = require("sequelize");
const db = require("../db");

const Event = db.define("event", {
  title: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
    validate: {
      notEmpty: true,
    },
  },
  address: {
    type: Sequelize.TEXT,
    validate: {
      notEmpty: true,
    },
  },
  image: {
    type: Sequelize.TEXT,
    validate: {
      notEmpty: true,
    },
  },
  start: {
    type: Sequelize.DATE,
    validate: {
      notEmpty: true,
    },
  },
  end: {
    type: Sequelize.DATE,
    validate: {
      notEmpty: true,
    },
  },
  tags: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    validate: {
      notEmpty: true,
    },
  },
  borough: {
    type: Sequelize.ENUM(
      "Bronx",
      "Brooklyn",
      "Queens",
      "Manhattan",
      "Staten-Island"
    ),
    validate: {
      notEmpty: true,
    },
  },
  eventLink: {
    type: Sequelize.STRING,
  },
  status: {
    type: Sequelize.ENUM("approved", "pending", "denied"),
    defaultValue: "pending",
  },
  longitude: {
    type: Sequelize.DOUBLE,
  },
  latitude: {
    type: Sequelize.DOUBLE,
  },
});

module.exports = Event;
