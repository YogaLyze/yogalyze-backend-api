import Reminder from '../models/ReminderModel.js';

export const addReminder = async (req, res) => {
  const {
    isMonday,
    isTuesday,
    isWednesday,
    isThursday,
    isFriday,
    isSaturday,
    isSunday,
    time_hour,
  } = req.body;
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
    res.status(200).json({ msg: 'Reminder Added' });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const getReminders = async (req, res) => {
  try {
    const user_schedule = await Reminder.findAll({
      attributes: [
        'isMonday',
        'isTuesday',
        'isWednesday',
        'isThursday',
        'isFriday',
        'isSaturday',
        'isSunday',
        'time_hour',
      ],
      where: {
        userId: req.user.userId,
      },
    });
    res.status(200).json(user_schedule);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const updateReminder = async (req, res) => {
  const {
    isMonday,
    isTuesday,
    isWednesday,
    isThursday,
    isFriday,
    isSaturday,
    isSunday,
    time_hour,
  } = req.body;
  try {
    await Reminder.update(
      {
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
      }
    );
    res.status(200).json({ msg: 'Reminder Updated' });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
