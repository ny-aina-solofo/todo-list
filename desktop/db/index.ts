import { Sequelize } from 'sequelize';
import { TodolistModel } from './todolist.model';

export const sequelize = new Sequelize(
  {
    host: 'localhost',
    dialect: 'sqlite',
    logging: console.log,
    storage: 'path/to/todolist.db'
  }
);

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

// Initialisation des modèles
export const db = {
  sequelize,
  Todolist: TodolistModel(sequelize),
};
