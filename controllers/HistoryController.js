import History from '../models/HistoryModel.js';

export const addHistory = async (req, res) => {
  const { yoga_type, yoga_pose, score, date } = req.body;
  try {
    const created_history = await History.create({
      yoga_type: yoga_type,
      yoga_pose: yoga_pose,
      score: score,
      date: date,
      userId: req.user.uid,
    });
    res.status(201).json({ msg: 'History Created', created_history});
  } catch (error) {
    res.status(500).json({ status: 'error', msg: error.message });
  }
};

export const getHistories = async (req, res) => {
  try {
    const user_history = await History.findAll({
      attributes: ['yoga_type', 'yoga_pose', 'score', 'date'],
      where: {
        userId: req.user.uid,
      },
    });
    res.status(200).json({ msg: 'History Retrieved', user_history });
  } catch (error) {
    res.status(500).json({ status: 'error', msg: error.message });
  }
};
