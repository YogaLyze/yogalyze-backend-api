import History from "../models/HistoryModel.js";

export const addHistory = async (req, res) => {
    const {user_id, yogaType, score, date} = req.body;

    try {
        History.create({
            user_id : user_id,
            yogaType: yogaType,
            score : score,
            date : date,
        });
        res.json({msg: 'history added'});
    } catch(error){
        console.log(error);
    }
};

export const getHistoryByUserId = async (req, res) => {
    const user_id = req.body;
    try{
        const user_history = History.findAll({
            where: {
                user_id : user_id
            }
        });
        res.json(user_history);
    } catch(error){
        console.log(error);
    }
};

