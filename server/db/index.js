const db = require("./db");
const User = require("./models/User");
const Event = require("./models/Event");

User.hasMany(Event);
Event.belongsToMany(User, { through: "Favorite_Event" });

module.exports = {
  db,
  models: {
    User,
    Event,
  },
};
