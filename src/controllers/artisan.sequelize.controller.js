const Artisan = require("../models/artisan.sequelize.model");

//=====================================================
//Afficher la liste completes des artisans
//=====================================================
exports.getAllArtisans = async (req, res) => {
     try {
            const artisans = await Artisan.findAll();
    
            res.json({
                message: "Liste complete des artisans:",
                artisans
            });
    
        } catch (error) {
    
            res.status(500).json({
                message: error.message
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
            }
        });

        res.json({
            message: "Liste Top des artisans:",
            artisans
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

//=====================================================
//Afficher artisan par son id
//=====================================================
exports.getOneArtisan = async (req, res) => {
    try {
        const { id } = req.params;
        const artisan = await Artisan.findByPk(id);

        if (!artisan) {
            return res.status(404).json({
            message: "Artisan introuvable"
                });
        }

        res.json({
            message: `Artisan avec l'id ${id}`,
            artisan
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
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
            message: "Un nouvel artisan est ajouté.",
            artisan
        });
    }catch (error) {
        res.status(500).json({
            message: error.message
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
            message: `L'artisan ${id} est modifié`,
            artisan
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
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

        await artisan.destroy(id);

        res.json({
            message: `L'artisan ${id} est supprimé`
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
      
};