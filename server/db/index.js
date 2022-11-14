const db = require("./db");
const User = require("./models/User");
const Resources = require("./models/Resources");
const Event = require("./models/Event");
const Favorite_Resource = require("./models/FavoriteResource");

// User.hasMany(Resources);
Resources.belongsToMany(User, { through: Favorite_Resource });
User.belongsToMany(Resources, { through: Favorite_Resource });
Favorite_Resource.belongsTo(User);
Favorite_Resource.belongsTo(Resources);

User.hasMany(Event);
Event.belongsToMany(User, { through: "Favorite_Event" });

module.exports = {
  db,
  models: {
    User,
    Event,
    Resources,
    Favorite_Resource,
  },
};
