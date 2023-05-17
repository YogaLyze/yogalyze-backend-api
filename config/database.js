import { Sequelize } from "sequelize";

const db = new Sequelize('yogalyze', 'root', '', { 
  host: 'localhost',
  dialect: 'mysql'
});

export default db;