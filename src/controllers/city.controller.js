const City = require("../models/city.model");

//=====================================================
//Afficher la liste completes des villes
//=====================================================
exports.getAllCities = async (req, res) => {
     try {
            const cities = await City.findAll();
    
            res.json({
                message: "Liste complete des villes:",
                cities
            });
    
        } catch (error) {
    
            res.status(500).json({
                message: error.message
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
            message: `Ville avec l'id ${id}`,
            city
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
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
            message: "Une nouvelle ville est ajoutée.",
            city
        });
    }catch (error) {
        res.status(500).json({
            message: error.message
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
            message: `La ville ${id} est modifiée`,
            city
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
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
            message: `La ville ${id} est supprimée`
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
      
};