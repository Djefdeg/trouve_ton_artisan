const Category = require("../models/category.sequelize.model");

//=====================================================
//Afficher la liste completes des catégories
//=====================================================
exports.getAllCategories = async (req, res) => {
     try {
            const categories = await Category.findAll();
    
            res.json({
                message: "Liste complete des catégories:",
                categories
            });
    
        } catch (error) {
    
            res.status(500).json({
                message: error.message
            });
        }
};

//=====================================================
//Afficher une catégorie par son id
//=====================================================
exports.getOneCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findByPk(id);

        if (!category) {
            return res.status(404).json({
            message: "Category introuvable"
                });
        }

        res.json({
            message: `Catégorie avec l'id ${id}`,
            category
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

//=====================================================
//Créer une nouvellle catégorie
//=====================================================
exports.createCategory = async (req, res) => {

    try {
        const category = await Category.create(req.body);
        res.status(201).json({
            message: "Une nouvelle catégorie est ajoutée.",
            category
        });
    }catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


//=====================================================
//Modifier une catégorie par son id
//=====================================================
exports.updateCategory = async (req, res) => {

    const { id } = req.params;

    try {

        const category = await Category.findByPk(id);

        if (!category) {
            return res.status(404).json({
                message: "Catégorie introuvable"
            });
        }

        await category.update(req.body);

        res.json({
            message: `La catégorie ${id} est modifiée`,
            category
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

//=====================================================
//Supprimer une catégorie par son id
//=====================================================
exports.deleteCategory = async (req, res) => {

    const { id } = req.params;

    try {

        const category = await Category.findByPk(id);

        if (!category) {
            return res.status(404).json({
                message: "Catégorie introuvable"
            });
        }

        await category.destroy(id);

        res.json({
            message: `La catégorie ${id} est supprimée`
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
      
};