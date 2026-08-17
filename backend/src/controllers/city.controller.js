const City = require("../models/city.model");
const { ValidationError } = require("sequelize");

//=====================================================
//Afficher la liste completes des villes
//=====================================================
exports.getAllCities = async (req, res) => {
     try {
            const cities = await City.findAll();
    
            res.json({
                message: "Liste des villes récupérée avec succès.:",
                cities
            });
    
        } catch (error) {
    
            res.status(500).json({
                message: "Une erreur interne est survenue lors de la récupération des spécialités."
            });
        }
};

//=====================================================
//Afficher une ville par son id
//=====================================================
exports.getOneCity = async (req, res) => {
    try {
        const { id } = req.params;
        const city = await City.findByPk(id);

        if (!city) {
            return res.status(404).json({
            message: "Ville introuvable"
                });
        }

        res.json({
            message: `Ville récupérée avec succès.`,
            city
        });

    } catch (error) {

        res.status(500).json({
            message: "Une erreur interne est survenue lors de la récupération des spécialités."
        });
    }
};

//=====================================================
//Créer une nouvellle ville
//=====================================================
exports.createCity = async (req, res) => {

    try {
        const city = await City.create(req.body);
        res.status(201).json({
            message: "Ville créée avec succès.",
            city
        });
    }catch (error) {
        if (error instanceof ValidationError) {
            return res.status(400).json({
                message: "Les données de la ville sont invalides.",
                errors: error.errors.map(err => err.message)
            });
        }

        res.status(500).json({
            message: "Une erreur interne est survenue lors de la récupération des spécialités."
        });
    }
};

//=====================================================
//Modifier une ville par son id
//=====================================================
exports.updateCity = async (req, res) => {

    const { id } = req.params;

    try {

        const city = await City.findByPk(id);

        if (!city) {
            return res.status(404).json({
                message: "Ville introuvable"
            });
        }

        await city.update(req.body);

        res.json({
            message: `Ville modifiée avec succès.`,
            city
        });

    } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(400).json({
                message: "Les données de la ville sont invalides.",
                errors: error.errors.map(err => err.message)
            });
        }
        res.status(500).json({
            message: "Une erreur interne est survenue lors de la récupération des spécialités."
        });

    }
};

//=====================================================
//Supprimer une ville par son id
//=====================================================
exports.deleteCity = async (req, res) => {

    const { id } = req.params;

    try {

        const city = await City.findByPk(id);

        if (!city) {
            return res.status(404).json({
                message: "Ville introuvable"
            });
        }

        await city.destroy(id);

        res.json({
            message: `Ville supprimée avec succès.`
        });

    } catch (error) {

        res.status(500).json({
            message: "Une erreur interne est survenue lors de la récupération des spécialités."
        });
    }
      
};