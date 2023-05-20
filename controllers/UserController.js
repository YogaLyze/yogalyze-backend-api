import Users from '../models/UserModel.js';
import History from '../models/HistoryModel.js';

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ['id', 'name', 'email'],
    });
    res.json(users.filter((user) => user.email === req.user.email));
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (req, res) => {
  const { age, gender, height, weight } = req.body;
  console.log(req.user);
  try {
    const user = await Users.update(
      {
        age: age,
        gender: gender,
        height: height,
        weight: weight,
      },
      {
        where: { id: req.user.userId },
      }
    );
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await History.destroy({
      where: {
        userId: req.user.userId,
      },
    });

    await Users.update(
      { refresh_token: null },
      {
        where: {
          id: req.user.userId,
        },
      }
    );

    await Users.destroy({
      where: {
        id: req.user.userId,
      },
    });

    res.status(200).json('User deleted');
  } catch (error) {
    console.log(error);
  }
};
