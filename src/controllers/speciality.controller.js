const {Speciality, Category} = require("../models");
const { ValidationError } = require("sequelize");

//=====================================================
//Afficher la liste completes des spécialités
//=====================================================
exports.getAllSpecialities = async (req, res) => {
     try {
            const specialities = await Speciality.findAll({
                include: [
                    Category
                ]
            });
    
            res.json({
                message: "Liste des spécialités récupérée avec succès.",
                specialities
            });
    
        } catch (error) {
    
            res.status(500).json({
                message: "Une erreur interne est survenue lors de la récupération des spécialités."
            });
        }
};

//=====================================================
//Afficher une specialité par son id
//=====================================================
exports.getOneSpeciality = async (req, res) => {
    try {
        const { id } = req.params;
        const speciality = await Speciality.findByPk(id,{
            include: [
                Category
            ]
        });

        if (!speciality) {
            return res.status(404).json({
            message: "Spécialité introuvable"
                });
        }

        res.json({
            message: `Spécialité récupérée avec succès.`,
            speciality
        });

    } catch (error) {

        res.status(500).json({
            message: "Une erreur interne est survenue lors de la récupération des spécialités."
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
            message: "Spécialité créée avec succès.",
            speciality
        });
    }catch (error) {
        if (error instanceof ValidationError) {
            return res.status(400).json({
                message: "Les données de la spécialité sont invalides.",
                errors: error.errors.map(err => err.message)
            });
        }

        res.status(500).json({
            message: "Une erreur interne est survenue lors de la création de la spécialité."
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
            message: `Spécialité modifiée avec succès.`,
            speciality
        });

    } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(400).json({
                message: "Les données de la spécialité sont invalides.",
                errors: error.errors.map(err => err.message)
            });
        }

        res.status(500).json({
            message: "Une erreur interne est survenue lors de la modificaation de la spécialité."
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
            message: `Ville supprimée avec succès.`
        });

    } catch (error) {
        res.status(500).json({
            message: "Une erreur interne est survenue lors de la suppression de la spécialité."
        });
    }
      
};