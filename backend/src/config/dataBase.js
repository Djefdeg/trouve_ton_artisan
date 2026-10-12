
const { Sequelize } = require("sequelize");

require("dotenv").config();

const isProduction = process.env.NODE_ENV === "production";

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "mysql",
        logging: false,
        ...(isProduction && {
            dialectOptions: {
                ssl: {
                    rejectUnauthorized: true
                }
            }
        })
    }
);

module.exports = sequelize;