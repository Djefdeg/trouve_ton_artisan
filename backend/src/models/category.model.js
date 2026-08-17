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
            validate: {
                notEmpty: {
                    msg: "Le nom de la catégorie ne peut pas être vide."
                },
                notNull: {
                    msg: "Le nom de la catégorie est obligatoire."
                },
                 set(value) {
                    this.setDataValue("name", value.trim());
                }
            },
        },
    },
    {
    tableName: "category",
    timestamps: false
    }
);

module.exports = Category;