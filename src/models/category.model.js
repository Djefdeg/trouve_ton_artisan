const { DataTypes } = require("sequelize");
const sequelize = require("../config/dataBase");

const Category = sequelize.define(
    "Category",
    {
        id_category: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    },
    {
    tableName: "category",
    timestamps: false
    }
);

module.exports = Category;