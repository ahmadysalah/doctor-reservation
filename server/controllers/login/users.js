const admins = require('../../database/models/admin');

const getUsers = async (req, res) => {
  const users = await admins.find();
  res.status(200).json(users);
};

module.exports = getUsers;
