import Users from '../models/UserModel.js';

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ['id', 'name', 'email'],
    });
    res.json(users.filter(user => user.email === req.user.email));
  } catch (error) {
    console.log(error);
  }
};