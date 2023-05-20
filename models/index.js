import Users from './UserModel.js';
import History from './HistoryModel.js';

Users.hasMany(History, {
  onDelete: 'cascade',
  hooks: true,
});

History.belongsTo(Users, {
  hooks: true,
});

export { Users, History };
