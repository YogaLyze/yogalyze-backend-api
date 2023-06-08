import User from '../models/UserModel.js';

export const updateProfile = async (req, res) => {
  const { date_of_birth, gender, weight, height } = req.body;
  try {
    const profile = await User.findOne({
      where: {
        userId: req.user.uid,
      },
    });
    if (profile) {
      const updated_profile = await User.update(
        {
          date_of_birth: date_of_birth,
          gender: gender,
          weight: weight,
          height: height,
          userId: req.user.uid,
        },
        {
          where: {
            userId: req.user.uid,
          }
        }
      );
      return res.status(200).json({ msg: 'Profile Updated', updated_profile });
    }
    const created_profile = await User.create({
      date_of_birth: date_of_birth,
      gender: gender,
      weight: weight,
      height: height,
      userId: req.user.uid,
    });
    res.status(201).json({ msg: 'Profile Created', created_profile });
  } catch (error) {
    res.status(500).json({ status: 'error', msg: error.message });
  }
};

export const getProfile = async (req, res) => {
  try {
    const profile = await User.findOne({
      attributes: ['date_of_birth', 'gender', 'weight', 'height'],
      where: {
        userId: req.user.uid,
      },
    });
    res.status(200).json({ msg: 'Profile Retrieved', profile });
  } catch (error) {
    res.status(500).json({ status: 'error', msg: error });
  }
};
