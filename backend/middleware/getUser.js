const { User } = require('../db/models');

module.exports = async function getUser(req, res, next) {
  // если пользователь залогинен, то в хранилище сессии лежит его userIdz

    const { userId } = req.session;
 
  const user = userId && (await User.findByPk(userId));
  res.locals.user = user;

  next(); 
};
