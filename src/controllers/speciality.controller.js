const Speciality = require ("../models/speciality.model");

//=====================================================
//Afficher la liste completes des spécialités
//=====================================================
exports.getAllSpecialities = async (req, res) => {
    try {
        const specialities = await Speciality.getAll();

        res.json({
            message: "Liste complete des spécialités:",
            specialities
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

//=====================================================
//Afficher une spécialité par son id
//=====================================================
exports.getOneSpeciality = async (req, res) => {
    try {
        const { id } = req.params;
        const speciality = await Speciality.getOne(id);

        if (!speciality) {
            return res.status(404).json({
            message: "Spécialité introuvable"
                });
        }

        res.json({
            message: `Spécialité avec l'id ${id}`,
            speciality
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

//=====================================================
//Créer une nouvelle spécialité
//=====================================================
exports.createSpeciality = async (req, res) => {

    try {
        const result = await Speciality.create(req.body);
        res.status(201).json({
            message: "Une nouvelle spécialité est ajouté.",
            id: result.insertId
        });
    }catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

//=====================================================
//Modifier une spécialité par son id
//=====================================================
exports.updateSpeciality = async(req, res) => {

    const { id } = req.params;

    try {
        const result = await Speciality.update(req.body,id);

        if (result.affectedRows === 0) {
            return res.status(404).json({
            message: "Spécialité introuvable."
            });
        }

        res.status(201).json({
            message: `la spécialité ${id} est modifiée`,
            affectedRows: result.affectedRows
        });

    }catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

//=====================================================
//Supprimer une spécialité par son id
//=====================================================
exports.deleteSpeciality = async (req, res) => {

    try {

        const { id } = req.params;

        const result = await Speciality.delete(id);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Speciality introuvable."
            });
        }

        res.json({
            message: "Spéciailité supprimée.",
            affectedRows: result.affectedRows
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};