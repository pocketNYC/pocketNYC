const {
  models: { User },
} = require("../db");

const checkForAdmin = async (req, res, next) => {
  const token = req.headers.authorization;
  const currentUser = await User.findByToken(token);

  req.user = currentUser;
  if (currentUser.dataValues.isAdmin) {
    next();
  } else {
    const error = new Error("Access denied!");
    error.status = 401;
    next(error);
  }
};

const getToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { checkForAdmin, getToken };
