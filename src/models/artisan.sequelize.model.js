const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelizeDb");

const Artisan = sequelize.define(
    "Artisan",
    {
        id_artisan: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        mark: {
            type: DataTypes.DECIMAL(2,1),
            validate: {min: 0.0, max: 5.0}
        },
        about: {
            type: DataTypes.TEXT
        },
        email: {
            type: DataTypes.STRING(100)
        },
        website: {
            type: DataTypes.STRING(100)
        },
        top: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        id_speciality: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'speciality', // Nom de la table cible
                key: 'id_speciality'  // Colonne référencée
            }
        },
        id_city: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'city', // Nom de la table cible
                key: 'id_city'  // Colonne référencée
            }
        }, 
    },
    {
    tableName: "artisan",
    timestamps: false
    }
);

module.exports = Artisan;