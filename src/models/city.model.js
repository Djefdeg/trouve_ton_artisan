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
            validate: {
                notEmpty: {
                    msg: "Le nom de la ville ne peut pas être vide."
                },
                notNull: {
                    msg: "Le nom de la ville est obligatoire."
                },
                 set(value) {
                    this.setDataValue("name", value.trim());
                }
            },
        },
    },
    {
    tableName: "city",
    timestamps: false
    }
);

module.exports = City;