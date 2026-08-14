const { Artisan, Speciality, City, Category } = require("../models");
const { ValidationError } = require("sequelize");

//=====================================================
//Afficher la liste completes des artisans
//=====================================================
exports.getAllArtisans = async (req, res) => {
     try {
            const artisans = await Artisan.findAll({
                include: [
                    Speciality,
                    City
                ]
            });
    
            res.json({
                message: "Liste des artisans récupérée avec succès.",
                artisans
            });
    
        } catch (error) {
    
            res.status(500).json({
                message: "Une erreur interne est survenue lors de la récupération des artisans."
            });
        }
};

//=====================================================
//Afficher la liste des meilleurs artisans
//=====================================================
exports.getTopArtisans = async (req, res) => {
    try {
        //const artisans = await Artisan.getTop();
        const artisans = await Artisan.findAll({
            where: {
                top: true
            },
            include: [
                    Speciality,
                    City
                ]
        });

        res.json({
            message: "Liste Top des artisans récupérée avec succès.",
            artisans
        });

    } catch (error) {

        res.status(500).json({
            message: "Une erreur interne est survenue lors de la récupération des artisans."
        });
    }
};

//=====================================================
//Afficher artisan par son id
//=====================================================
exports.getOneArtisan = async (req, res) => {
    try {
        const { id } = req.params;
        const artisan = await Artisan.findByPk(id,{
            include: [
                {
                    model: Speciality,
                    include: [
                        Category
                    ]
                },
                City
            ]
        });

        if (!artisan) {
            return res.status(404).json({
            message: "Artisan introuvable"
                });
        }

        res.json({
            message: `Artisan récupéré avec succès.`,
            artisan
        });

    } catch (error) {

        res.status(500).json({
            message: "Une erreur interne est survenue lors de la récupération des artisans."
        });
    }
};

//=====================================================
//Créer un nouvel artisan
//=====================================================
exports.createArtisan = async (req, res) => {

    try {
        const artisan = await Artisan.create(req.body);
        res.status(201).json({
            message: "Artisan créé avec succès.",
            artisan
        });
    }catch (error) {
        if (error instanceof ValidationError) {
            return res.status(400).json({
                message: "Les données de l'artisan sont invalides.",
                errors: error.errors.map(err => err.message)
            });
        }

        res.status(500).json({
            message: "Une erreur interne est survenue lors de la création de l'artisan."
        });
    }
};

//=====================================================
//Modifier un artisan par son id
//=====================================================
exports.updateArtisan = async (req, res) => {

    const { id } = req.params;

    try {

        const artisan = await Artisan.findByPk(id);

        if (!artisan) {
            return res.status(404).json({
                message: "Artisan introuvable"
            });
        }

        await artisan.update(req.body);

        res.json({
            message: `Artisan modifié avec succès.`,
            artisan
        });

    } catch (error) {
        if (error instanceof ValidationError) {
            return res.status(400).json({
                message: "Les données de l'artisan sont invalides.",
                errors: error.errors.map(err => err.message)
            });
        }
        res.status(500).json({
            message: "Une erreur interne est survenue lors de la modification de l'artisan."
        });

    }
};

//=====================================================
//Supprimer un artisan par son id
//=====================================================
exports.deleteArtisan = async (req, res) => {

    const { id } = req.params;

    try {

        const artisan = await Artisan.findByPk(id);

        if (!artisan) {
            return res.status(404).json({
                message: "Artisan introuvable"
            });
        }

        await artisan.destroy();

        res.json({
            message: `Artisan supprimé avec succès.`
        });

    } catch (error) {
        res.status(500).json({
            message: "Une erreur interne est survenue lors de la suppression de l'artisan."
        });
    }
      
};