//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");

//associations could go here!
// User.hasMany(Resource);
// Resource.belongsToMany(User, {through: Favorite_Resource});


module.exports = {
  db,
  models: {
    User,
  },
};
