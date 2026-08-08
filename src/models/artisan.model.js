const { DataTypes } = require("sequelize");
const sequelize = require("../config/dataBase");

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
            validate: {
                notEmpty: {
                    msg: "Le nom de l'artisan ne peut pas être vide."
                },
                notNull: {
                    msg: "Le nom de l'artisan est obligatoire."
                }
            },
            set(value) {
                this.setDataValue("name", value.trim());
            }
        },
        mark: {
            type: DataTypes.DECIMAL(2,1),
            validate: {min: 0.0, max: 5.0}
        },
        about: {
            type: DataTypes.TEXT
        },
        email: {
            type: DataTypes.STRING(100),
            validate: {
            isEmail: {
                msg: "L'adresse email n'est pas valide."
            }
            }
        },
        website: {
            type: DataTypes.STRING(100),
            validate: {
            isUrl: {
                msg: "L'URL du site web n'est pas valide."
            }
            }
        },
        top: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        id_speciality: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: {
                    msg: "L'identifiant de la spécialité doit être un entier."
                }
            },
            references: {
                model: 'speciality', // Nom de la table cible
                key: 'id_speciality'  // Colonne référencée
            }
        },
        id_city: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: {
                    msg: "L'identifiant de la ville doit être un entier."
                }
            },
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