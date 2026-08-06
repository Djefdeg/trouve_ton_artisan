const express = require ('express');
const specialityController = require('../controllers/speciality.controller');

const router = express.Router();

// Récupérer toutes les spécialités
router.get('/', specialityController.getAllSpecialities);

//Récupérer une spécialité donnée
router.get('/:id', specialityController.getOneSpeciality);

//Ajouter une spécialité
router.post('/', specialityController.createSpeciality);

//Modifier une spéciality
router.put('/:id', specialityController.updateSpeciality);

//Supprimer une spécialité
router.delete('/:id', specialityController.deleteSpeciality);

module.exports =router;
