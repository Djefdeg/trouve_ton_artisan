const express = require('express');
const app = express();

//Décoder les requetes en JSON
app.use(express.json());
//Décoder les requetes en HTML par un formulaire
app.use(express.urlencoded({ extended: true }));
//Afficher la méthode et l'URL
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Définition de la route principale
app.get('/', (req, res) => {
  res.send('Bonjour depuis mon serveur Express !');
});

module.exports = app;