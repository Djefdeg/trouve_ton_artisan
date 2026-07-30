const City = require ("../models/city.model");

//=====================================================
//Afficher la liste completes des villes
//=====================================================
exports.getAllCities = async (req, res) => {
    try {
        const cities = await City.getAll();

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
        const city = await City.getOne(id);

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
//Créer une nouvelle ville
//=====================================================
exports.createCity = async (req, res) => {

    try {
        const result = await City.create(req.body);
        res.status(201).json({
            message: "Une nouvelle ville est ajoutée.",
            id: result.insertId
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
exports.updateCity = async(req, res) => {

    const { id } = req.params;

    try {
        const result = await City.update(req.body,id);

        if (result.affectedRows === 0) {
            return res.status(404).json({
            message: "Ville introuvable."
            });
        }

        res.status(201).json({
            message: `la ville ${id} est modifiée`,
            affectedRows: result.affectedRows
        });

    }catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

//=====================================================
//Supprimer une ville par son id
//=====================================================
exports.deleteCity = async (req, res) => {

    try {

        const { id } = req.params;

        const result = await City.delete(id);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Ville introuvable."
            });
        }

        res.json({
            message: "Ville supprimé.",
            affectedRows: result.affectedRows
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};