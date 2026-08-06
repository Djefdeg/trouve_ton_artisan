const { DataTypes } = require("sequelize");
const sequelize = require("../config/dataBase");

const Speciality = sequelize.define(
    "Speciality",
    {
        id_speciality: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        id_category: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'category', // Nom de la table cible
                key: 'id_category'  // Colonne référencée
            }
        },
    },
    {
    tableName: "speciality",
    timestamps: false
    }
);

module.exports = Speciality;