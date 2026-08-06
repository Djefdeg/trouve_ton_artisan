const { DataTypes } = require("sequelize");
const sequelize = require("../config/dataBase");

const City = sequelize.define(
    "City",
    {
        id_city: {
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
    tableName: "city",
    timestamps: false
    }
);

module.exports = City;