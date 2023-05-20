import Users from './UserModel.js';
import History from './HistoryModel.js';

Users.hasMany(History, {
  onDelete: 'cascade',
  hooks: true,
  foreignKey: 'user_id',
  as: 'History',
});

History.belongsTo(Users, {
  onDelete: 'cascade',
  hooks: true,
  foreignKey: 'user_id',
  as: 'user',
});

export { Users, History };
