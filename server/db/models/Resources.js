const DataTypes = require("sequelize");
const db = require("../db");

const Resources = db.define("resources", {
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    defaultValue:
      "https://png.pngtree.com/png-vector/20190308/ourlarge/pngtree-simple-creative-new-york-city-skyine-png-image_771188.jpg",
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  boro: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  tag: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
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

module.exports = Resources;
