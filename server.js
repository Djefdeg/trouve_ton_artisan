const express = require('express');
const app = express();
const port = 3000;

// Définition de la route principale
app.get('/', (req, res) => {
  res.send('Bonjour depuis mon serveur Express !');
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Le serveur écoute sur http://localhost:${port}`);
});
