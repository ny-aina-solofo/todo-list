import path from 'path';
import {Sequelize,Model} from 'sequelize';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.resolve(__dirname, 'todolist.db');

const sequelize = new Sequelize({
  host: 'localhost',
  dialect: 'sqlite',
  logging: console.log,
  storage: dbPath,
});

const db  = {
  Sequelize,
  sequelize,
  todolist: null,
}

export async function initDatabase() {
  try {
    await sequelize.authenticate();
    console.log('✅ Connection has been established successfully.');

    const { default: initModel } = await import('./todolist.model.js');
    db.todolist = initModel(sequelize, Sequelize);

    await sequelize.sync();
    console.log('✅ Database synced.');
  } catch (err) {
    console.error('❌ Database error:', err);
  }

  return db;
}

export default db;
