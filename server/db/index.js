const db = require("./db");
const User = require("./models/User");
const Resource = require("./models/Resource");
const Event = require("./models/Event");
const Favorite_Resources = require("./models/Favorite_Resources");
const Favorite_Events = require("../db/models/Favorite_Events");
const UserCalendar = require("../db/models/UserCalendar");

Resource.belongsToMany(User, { through: Favorite_Resources });
User.belongsToMany(Resource, { through: Favorite_Resources });
Favorite_Resources.belongsTo(User);
Favorite_Resources.belongsTo(Resource);

User.hasMany(Event);
Event.belongsTo(User);
User.belongsToMany(Event, { through: Favorite_Events });
Event.belongsToMany(User, { through: Favorite_Events });
Favorite_Events.belongsTo(User);
Favorite_Events.belongsTo(Event);

User.belongsToMany(Event, { through: UserCalendar });
Event.belongsToMany(User, { through: UserCalendar });
UserCalendar.belongsTo(User);
UserCalendar.belongsTo(Event);

module.exports = {
  db,
  models: {
    User,
    Event,
    Resource,
    Favorite_Resources,
    Favorite_Events,
    UserCalendar,
  },
};
