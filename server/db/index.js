const db = require("./db");
const User = require("./models/User");
const Resource = require("./models/Resource");
const Event = require("./models/Event");
const Favorite_Resource = require("./models/Favorite_Resource");
const Favorite_Event = require("../db/models/Favorite_Event");

// User.hasMany(Resources);
Resource.belongsToMany(User, { through: Favorite_Resource });
User.belongsToMany(Resource, { through: Favorite_Resource });
Favorite_Resource.belongsTo(User);
Favorite_Resource.belongsTo(Resource);

// User.hasMany(Event);
User.belongsToMany(Event, { through: Favorite_Event });
Event.belongsToMany(User, { through: Favorite_Event });
Favorite_Event.belongsTo(User);
Favorite_Event.belongsTo(Event);

module.exports = {
  db,
  models: {
    User,
    Event,
    Resource,
    Favorite_Resource,
    Favorite_Event,
  },
};
