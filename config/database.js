import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

const db = new Sequelize(process.env.DATABASE, 'root', process.env.PASSWORD, { 
  host: process.env.HOST,
  dialect: 'mysql',
  logging: false
});

export default db;