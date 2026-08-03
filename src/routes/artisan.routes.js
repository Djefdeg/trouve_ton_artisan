const express = require ('express');
const artisanController = require('../controllers/artisan.sequelize.controller');

const router = express.Router();

// Récupérer tous les artisans
router.get('/', artisanController.getAllArtisans);

//Récupérer le top des artisans
router.get('/top', artisanController.getTopArtisans);

//Récupérer un artisan donné
router.get('/:id', artisanController.getOneArtisan);

//Ajouter un artisan
router.post('/', artisanController.createArtisan);

//Modifier un artisan
router.put('/:id', artisanController.updateArtisan);

//Supprimer un artisan
router.delete('/:id', artisanController.deleteArtisan);

module.exports =router;

