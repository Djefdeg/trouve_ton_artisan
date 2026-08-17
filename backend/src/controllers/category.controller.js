const Category = require("../models/category.model");
const { ValidationError } = require("sequelize");

//=====================================================
//Afficher la liste completes des catégories
//=====================================================
exports.getAllCategories = async (req, res) => {
     try {
            const categories = await Category.findAll();
    
            res.json({
                message: "Liste des catégories récupérée avec succès.",
                categories
            });
    
        } catch (error) {
    
            res.status(500).json({
                message: "Une erreur interne est survenue lors de la récupération des spécialités."
            });
        }
};

//=====================================================
//Afficher une catégorie par son id
//=====================================================
exports.getOneCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findByPk(id);

        if (!category) {
            return res.status(404).json({
            message: "Catégorie introuvable"
                });
        }

        res.json({
            message: `Catégorie récupérée avec succès.`,
            category
        });

    } catch (error) {

        res.status(500).json({
            message: "Une erreur interne est survenue lors de la récupération des spécialités."
        });
    }
};

//=====================================================
//Créer une nouvellle catégorie
//=====================================================
exports.createCategory = async (req, res) => {

    try {
        const category = await Category.create(req.body);
        res.status(201).json({
            message: "Catégorie créée avec succès.",
            category
        });
    }catch (error) {
        if (error instanceof ValidationError) {
            return res.status(400).json({
                message: "Les données de la catégorie sont invalides.",
                errors: error.errors.map(err => err.message)
            });
        }
        res.status(500).json({
            message: "Une erreur interne est survenue lors de la récupération des spécialités."
        });
    }
};


//=====================================================
//Modifier une catégorie par son id
//=====================================================
exports.updateCategory = async (req, res) => {

    const { id } = req.params;

    try {

        const category = await Category.findByPk(id);

        if (!category) {
            return res.status(404).json({
                message: "Catégorie introuvable"
            });
        }

        await category.update(req.body);

        res.json({
            message: `Catégorie modifiée avec succès.`,
            category
        });

    } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(400).json({
                message: "Les données de la catégorie sont invalides.",
                errors: error.errors.map(err => err.message)
            });
        }
        res.status(500).json({
            message: "Une erreur interne est survenue lors de la récupération des spécialités."
        });

    }
};

//=====================================================
//Supprimer une catégorie par son id
//=====================================================
exports.deleteCategory = async (req, res) => {

    const { id } = req.params;

    try {

        const category = await Category.findByPk(id);

        if (!category) {
            return res.status(404).json({
                message: "Catégorie introuvable"
            });
        }

        await category.destroy(id);

        res.json({
            message: `Catégorie supprimée avec succès.`
        });

    } catch (error) {

        res.status(500).json({
            message: "Une erreur interne est survenue lors de la récupération des spécialités."
        });
    }
      
};