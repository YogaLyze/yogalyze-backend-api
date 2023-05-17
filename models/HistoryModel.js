import { Sequelize } from 'sequelize';
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const History = db.define(
  'history',
  {
    user_id: {
      type: DataTypes.BIGINT,
    },
    yogaType: {
      type: DataTypes.STRING,
    },
    score: {
      type: DataTypes.INTEGER,
    },
    date: {
      type: DataTypes.DATE,
    }
  },
  {
    freezeTableName: true,
  }
);

export default History;