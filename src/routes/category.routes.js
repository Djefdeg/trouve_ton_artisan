
const express = require ('express');
const categoryController = require('../controllers/category.sequelize.controller');

const router = express.Router();

// Récupérer toutes les catégories
router.get('/', categoryController.getAllCategories);

//Récupérer une catégorie donnée
router.get('/:id', categoryController.getOneCategory);

//Ajouter une categorie
router.post('/', categoryController.createCategory);

//Modifier une catégorie
router.put('/:id', categoryController.updateCategory);

//Supprimer une catégorie
router.delete('/:id', categoryController.deleteCategory);


module.exports =router;