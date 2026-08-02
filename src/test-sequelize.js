const sequelize = require("./config/sequelize");

sequelize.authenticate()
    .then(() => {
        console.log("Connexion Sequelize réussie !");
    })
    .catch((error) => {
        console.error("Erreur de connexion Sequelize :", error);
    });