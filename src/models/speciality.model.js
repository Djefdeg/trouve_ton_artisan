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
            validate: {
                notEmpty: {
                    msg: "Le nom de la spécialité ne peut pas être vide."
                },
                notNull: {
                    msg: "Le nom de la spécialité est obligatoire."
                },
                 set(value) {
                    this.setDataValue("name", value.trim());
                }
            },
        },
        avatar: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        id_category: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: {
                    msg: "L'identifiant de la catégorie doit être un entier."
                }
            },
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