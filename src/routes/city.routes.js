
const express = require ('express');
const cityController = require('../controllers/city.sequelize.controller');

const router = express.Router();

// Récupérer toutes les villes
router.get('/', cityController.getAllCities);

//Récupérer une ville donnée
router.get('/:id', cityController.getOneCity);

//Ajouter une ville
router.post('/', cityController.createCity);

//Modifier une ville
router.put('/:id', cityController.updateCity);

//Supprimer une ville
router.delete('/:id', cityController.deleteCity);


module.exports =router;