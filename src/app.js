const express = require('express');
require("./config/mysqlDb");
const artisanRoutes = require('./routes/artisan.routes');
const categoryRoutes = require('./routes/category.routes');
const cityRoutes = require('./routes/city.routes');
const specialityRoutes = require('./routes/speciality.routes');
const userRoutes = require('./routes/user.routes');

const app = express();

//MIDDLEWARES

//Décoder les requetes en JSON
app.use(express.json());
//Décoder les requetes en HTML de formulaires
app.use(express.urlencoded({ extended: true }));
//Afficher la méthode et l'URL
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

//Routes
app.use('/artisans',artisanRoutes);
app.use('/categories',categoryRoutes);
app.use('/cities',cityRoutes);
app.use('/specialities',specialityRoutes);
app.use('/users',userRoutes);

// Définition de la route principale
app.get('/', (req, res) => {
  res.send('Bonjour depuis mon serveur Express !');
});

module.exports = app;