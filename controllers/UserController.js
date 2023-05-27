import Users from '../models/UserModel.js';
import History from '../models/HistoryModel.js';

export const getUser = async (req, res) => {
  try {
    const user = await Users.findAll({
      attributes: ['name', 'email', 'age', 'gender', 'height', 'weight'],
      where: {
        id: req.user.userId,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const updateUser = async (req, res) => {
  const { age, gender, height, weight } = req.body;

  try {
    await Users.update(
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
    res.status(200).json({ msg: 'User Updated' });
  } catch (error) {
    res.status(500).json({ msg: error });
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

    res.status(200).json({ msg: 'User Deleted' });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
