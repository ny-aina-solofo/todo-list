export default (sequelize, Sequelize) => {
  const todolist = sequelize.define(
    'todolist',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      libelle: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      done: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      rang: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      freezeTableName: true,
      timestamps: false,
    }
  );

  return todolist;
};
