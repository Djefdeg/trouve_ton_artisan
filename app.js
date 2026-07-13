const express = require('express');
const app = express();

// Définition de la route principale
app.get('/', (req, res) => {
  res.send('Bonjour depuis mon serveur Express !');
});

module.exports = app;