const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    //les nouvelles requêtes apres les 10 premieres, attendront qu'une connexion se libère au lieu d'échouer immédiatement.
    waitForConnections: true,
    //le pool pourra ouvrir jusqu'à 10 connexions simultanées à MySQL.
    connectionLimit: 10,
    //la file d'attente est illimitée.
    queueLimit: 0
});

// Vérification de la connexion
(async () => {
    try {
        const connection = await pool.getConnection();
        console.log("Connected to MySQL database.");
        connection.release();
    } catch (error) {
        console.error("Database connection failed :", error.message);
    }
})();

module.exports = pool;