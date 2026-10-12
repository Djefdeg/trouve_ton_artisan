const app = require ('./src/app');
const port = process.env.PORT || 3000;

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Le serveur écoute sur http://localhost:${port}`);
});
