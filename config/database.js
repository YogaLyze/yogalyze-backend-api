import { Sequelize } from "sequelize";

const db = new Sequelize('yogalyze', 'root', 'capstone415', { 
  host: '34.101.111.20',
  dialect: 'mysql'
});

// const db = new Sequelize('yogalyze', 'root', '', { 
//   host: 'localhost',
//   dialect: 'mysql'
// });

export default db;
