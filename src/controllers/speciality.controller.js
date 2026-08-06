const Speciality = require("../models/speciality.model");

//=====================================================
//Afficher la liste completes des spécialités
//=====================================================
exports.getAllSpecialities = async (req, res) => {
     try {
            const specialities = await Speciality.findAll();
    
            res.json({
                message: "Liste complete spécialités:",
                specialities
            });
    
        } catch (error) {
    
            res.status(500).json({
                message: error.message
            });
        }
};

//=====================================================
//Afficher une specialité par son id
//=====================================================
exports.getOneSpeciality = async (req, res) => {
    try {
        const { id } = req.params;
        const speciality = await Speciality.findByPk(id);

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
        const speciality = await Speciality.create(req.body);
        res.status(201).json({
            message: "Une nouvelle spécialité est ajoutée.",
            speciality
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
exports.updateSpeciality = async (req, res) => {

    const { id } = req.params;

    try {

        const speciality = await Speciality.findByPk(id);

        if (!speciality) {
            return res.status(404).json({
                message: "Spécialité introuvable"
            });
        }

        await speciality.update(req.body);

        res.json({
            message: `La spécialité ${id} est modifiée`,
            speciality
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

//=====================================================
//Supprimer une spécialité par son id
//=====================================================
exports.deleteSpeciality = async (req, res) => {

    const { id } = req.params;

    try {

        const speciality = await Speciality.findByPk(id);

        if (!speciality) {
            return res.status(404).json({
                message: "Spécialité introuvable"
            });
        }

        await speciality.destroy(id);

        res.json({
            message: `La spécialité ${id} est supprimé`
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
      
};