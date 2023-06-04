import { Sequelize } from 'sequelize';
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Reminder = db.define(
  'reminder',
  {
    isMonday: {
      type: DataTypes.TINYINT(1),
      allowNull: false,
    },
    isTuesday: {
      type: DataTypes.TINYINT(1),
      allowNull: false,
    },
    isWednesday: {
      type: DataTypes.TINYINT(1),
      allowNull: false,
    },
    isThursday: {
      type: DataTypes.TINYINT(1),
      allowNull: false,
    },
    isFriday: {
      type: DataTypes.TINYINT(1),
      allowNull: false,
    },
    isSaturday: {
      type: DataTypes.TINYINT(1),
      allowNull: false,
    },
    isSunday: {
      type: DataTypes.TINYINT(1),
      allowNull: false,
    },
    time_hour: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    paranoid: true,
    freezeTableName: true,
  }
);

  export default Reminder;