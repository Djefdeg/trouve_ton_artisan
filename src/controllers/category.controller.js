const Category = require ("../models/category.model");

//=====================================================
//Afficher la liste completes des catégories
//=====================================================
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.getAll();

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
        const category = await Category.getOne(id);

        if (!category) {
            return res.status(404).json({
            message: "Category introuvable"
                });
        }

        res.json({
            message: `Category avec l'id ${id}`,
            category
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

//=====================================================
//Créer une nouvelle categorie
//=====================================================
exports.createCategory = async (req, res) => {

    try {
        const result = await Category.create(req.body);
        res.status(201).json({
            message: "Une nouvelle catégorie est ajoutée.",
            id: result.insertId
        });
    }catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

//=====================================================
//Modifier une categorie par son id
//=====================================================
exports.updateCategory = async(req, res) => {

    const { id } = req.params;

    try {
        const result = await Category.update(req.body,id);

        if (result.affectedRows === 0) {
            return res.status(404).json({
            message: "Catégorie introuvable."
            });
        }

        res.status(201).json({
            message: `la catégorie ${id} est modifiée`,
            affectedRows: result.affectedRows
        });

    }catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

//=====================================================
//Supprimer une catégorie par son id
//=====================================================
exports.deleteCategory = async (req, res) => {

    try {

        const { id } = req.params;

        const result = await Category.delete(id);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Catégorie introuvable."
            });
        }

        res.json({
            message: "Catégorie supprimé.",
            affectedRows: result.affectedRows
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};