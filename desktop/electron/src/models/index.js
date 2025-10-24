const Sequelize = require('sequelize');  
const path = require('node:path');

const dbPath = path.resolve(__dirname, 'todolist.db');

const sequelize = new Sequelize({
  host: 'localhost',
  dialect: 'sqlite',
  logging: console.log,
  storage: dbPath,
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

sequelize.sync()
  .then(() => {
    console.log('✅ Database synced.');
  })
  .catch(err => {
    console.error('❌ Database error:', err);
  });


const db = {} ; 
db.Sequelize = Sequelize ; 
db.sequelize = sequelize ; 

db.todolist = require('./todolist_model')(sequelize,Sequelize);

module.exports = {db,sequelize} ; 
    