import Reminder from "../models/ReminderModel.js";

export const addReminder = async (req, res) => {
  const { isMonday, isTuesday, isWednesday, isThursday, isFriday, isSaturday, isSunday,  time_hour} = req.body;
  try {
    Reminder.create({
      isMonday: isMonday,
      isTuesday: isTuesday,
      isWednesday: isWednesday,
      isThursday: isThursday,
      isFriday: isFriday,
      isSaturday: isSaturday,
      isSunday: isSunday,
      time_hour: time_hour,
      userId: req.user.userId,
    });
    res.json({ msg: 'reminder added' });
  } catch (error) {
    console.log(error);
  }
};

export const getReminderByUserId = async (req, res) => {
    try{
        const user_schedule = await Reminder.findAll({
            where: {
                userId : req.params.id
            }
        });
        res.json(user_schedule);
    } catch(error){
        console.log(error);
    }
};

export const updateReminderByuserId = async (req, res) => {
    const { isMonday, isTuesday, isWednesday, isThursday, isFriday, isSaturday, isSunday,  time_hour} = req.body;
    try{
        await Reminder.update({
            isMonday: isMonday,
            isTuesday: isTuesday,
            isWednesday: isWednesday,
            isThursday: isThursday,
            isFriday: isFriday,
            isSaturday: isSaturday,
            isSunday: isSunday,
            time_hour: time_hour,
        },
        {
            where: { id: req.user.userId }, 
        });
        res.json("reminder updated");
    } catch(error){
        console.log(error);
    }
};

