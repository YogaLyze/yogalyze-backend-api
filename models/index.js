import Users from './UserModel.js';
import History from './HistoryModel.js';
import Reminder from './ReminderModel.js';

Users.hasMany(History, {
  onDelete: 'cascade',
  hooks: true
});

Users.hasOne(Reminder, 
  {
    onDelete: 'cascade',
    hooks: true
});

History.belongsTo(Users, {
  foreignKey: 'userId',
});

Reminder.belongsTo(Users, {
  foreignKey: 'userId',
})

export { Users, History, Reminder };
