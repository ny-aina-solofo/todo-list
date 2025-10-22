var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_todolist_model_001 = __commonJS({
  "todolist.model-CY4flcE8.js"(exports, module) {
    module.exports = (sequelize, Sequelize) => {
      const todolist = sequelize.define(
        "todolist",
        {
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
          },
          libelle: {
            type: Sequelize.STRING,
            allowNull: false
          },
          done: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          rang: {
            type: Sequelize.STRING,
            allowNull: false
          }
        },
        {
          sequelize,
          freezeTableName: true,
          timestamps: false
        }
      );
      return todolist;
    };
  }
});
export default require_todolist_model_001();
