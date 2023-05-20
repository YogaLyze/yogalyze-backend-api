import History from "../models/HistoryModel.js";

export const addHistory = async (req, res) => {
  const { yoga_type, yoga_pose, score, date } = req.body;
  try {
    History.create({
      yoga_type: yoga_type,
      yoga_pose: yoga_pose,
      score: score,
      date: date,
      userId: req.user.userId,
    });
    res.json({ msg: 'history added' });
  } catch (error) {
    console.log(error);
  }
};

export const getHistoryByUserId = async (req, res) => {
    try{
        const user_history = await History.findAll({
            where: {
                userId : req.params.id
            }
        });
        res.json(user_history);
    } catch(error){
        console.log(error);
    }
};

