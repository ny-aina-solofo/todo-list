import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

export interface TodosAttributes {
  id_todo : number,
  libelle : String, 
  done : Boolean, 
  rang : String
      
}

export type TodoCreationAttributes = Optional<TodosAttributes, 'id_todo'>;

export class Todolist extends Model<TodosAttributes, TodoCreationAttributes> implements TodosAttributes {
  public id_todo!: number;
  public libelle!: string;
  public done!: Boolean;
  public rang!: string;
}

export const TodolistModel = (sequelize: Sequelize): typeof Todolist => {
  Todolist.init(
    {
      id_todo: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      libelle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      done: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      rang: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      freezeTableName: true,
      schema: 'todolist',
      timestamps: false,
    }
  );

  return Todolist;
};
