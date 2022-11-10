const Sequelize = require("sequelize");
const db = require("../db");

const Resources = db.define("resources", {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://png.pngtree.com/png-vector/20190308/ourlarge/pngtree-simple-creative-new-york-city-skyine-png-image_771188.jpg",
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  boro: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tag: {
    type: Sequelize.ENUM,
    values: [
      "clothes",
      "city services",
      "seniors",
      "disability services",
      "food",
      "health",
      "education",
      "employment",
      "finance",
    ],
    allowNull: false,
  },
  hyperlink: {
    type: Sequelize.STRING,
  },
  latitude: {
    type: Sequelize.STRING,
  },
  longitude: {
    type: Sequelize.STRING,
  },
});

module.exports = Resources;
