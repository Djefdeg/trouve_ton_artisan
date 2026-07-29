const Artisan = require ("../models/artisan.model");


//=====================================================
//Afficher la liste completes des artisans
//=====================================================
exports.getAllArtisans = async (req, res) => {
    try {
        const artisans = await Artisan.getAll();

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
        const artisans = await Artisan.getTop();

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
        const artisan = await Artisan.getOne(id);

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
        const result = await Artisan.create(req.body);
        res.status(201).json({
            message: "Un nouvel artisan est ajouté.",
            id: result.insertId
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
exports.updateArtisan = async(req, res) => {

    const { id } = req.params;

    try {
        const result = await Artisan.update(req.body,id);

        if (result.affectedRows === 0) {
            return res.status(404).json({
            message: "Artisan introuvable."
            });
        }

        res.status(201).json({
            message: `l'artisan ${id} est modifié`,
            affectedRows: result.affectedRows
        });

    }catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

//=====================================================
//Supprimer un artisan par son id
//=====================================================
exports.deleteArtisan = async (req, res) => {

    try {

        const { id } = req.params;

        const result = await Artisan.delete(id);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Artisan introuvable."
            });
        }

        res.json({
            message: "Artisan supprimé.",
            affectedRows: result.affectedRows
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};