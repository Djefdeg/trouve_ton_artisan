//Afficher la liste completes des artisans
exports.getAllArtisans = (req, res) => {
    res.json({
        message: "Liste de tous les artisans"
    });
};

//Afficher la liste top des artisans
exports.getTopArtisans = (req, res) => {
    res.json({
        message: "Liste des artisans du mois"
    });
};

//Afficher artisan donné par son id
exports.getOneArtisan = (req, res) => {
    res.json({
        id:req.params.id,
        message: `Artisan avec l'id ${id}`
    });
};

//Créer un nouvel artisan
exports.createArtisan = (req, res) => {

    res.json({
        message: "Création d'un artisan"
    });
};

//Modifier un artisan donné par son id
exports.updateArtisan = (req, res) => {

    const id = req.params.id;

    res.json({
        message: `Modification de l'artisan ${id}`
    });
};

//Supprimer un artisan donné par son id
exports.deleteArtisan = (req, res) => {

    const id = req.params.id;

    res.json({
        message: `Suppression de l'artisan ${id}`
    });
};